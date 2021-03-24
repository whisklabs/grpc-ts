import { isFunction, isNumber, isObject, isPresent, isString, isText } from '@whisklabs/typeguards';

import { Decode, Encode } from '../binary';
import { Field, FieldGet, Service, ServiceRequest, ServiceResponse } from '../types';
import { send } from './devtool';
import { maskWrap } from './mask';
import { Chunk, ChunkType, chunkParse } from './parser';
import { StatusCode, fromHttpStatus } from './status';
import { Cancel, ConfigGRPC, GError, GOutput, GRPC, LocalGRPC } from './types';
import { GRPC_MESSAGE, GRPC_STATUS, encodeRequest, safeJSON, toInt8 } from './utils';

export const grpcCancel = (): Cancel => {
  const CancelFn = (() => {
    CancelFn.abort?.();
    CancelFn.abort = undefined;
  }) as Cancel;

  return CancelFn;
};

export const grpcHTTP = ({
  server,
  transformRequest,
  transformResponse,
  credentials = true,
  timeout: timeoutConfig,
  devtool = false,
  debug = false,
  logger,
}: ConfigGRPC) => {
  if (!isText(server)) {
    throw new Error('No "server" in GRPC config');
  }

  const cancels: Record<string, () => void> = {};

  return (<T extends Field, K extends Field>(
    field: Service<T, K>,
    values = {} as ServiceRequest<Service<T, K>>,
    { cancel, onDownload, onUpload, mask, timeout }: LocalGRPC<T> = {}
  ): Promise<GOutput<ServiceResponse<Service<T, K>>>> => {
    if (isString(cancel) && isFunction(cancels[cancel])) {
      cancels[cancel]();
      delete cancels[cancel];
    }

    const method = `${server}/${field.name}`;
    const xhr = new XMLHttpRequest();
    const abortXHR = () => xhr.abort();

    if (isPresent(cancel)) {
      if (isString(cancel)) {
        cancels[cancel] = abortXHR;
      } else {
        cancel.abort = abortXHR;
      }
    }

    const tmCancel = () => {
      if (isPresent(cancel)) {
        if (isString(cancel)) {
          delete cancels[cancel];
        } else {
          cancel.abort = undefined;
        }
      }
    };

    let sendData: FieldGet<T> = values;

    // eslint-disable-next-line @typescript-eslint/no-misused-promises, no-async-promise-executor
    return new Promise<GOutput<ServiceResponse<Service<T, K>>>>(async callback => {
      const time = timeout ?? timeoutConfig;

      if (isNumber(time) && time > 0) {
        setTimeout(() => {
          callback({ success: false, error: { message: 'timeout', data: time } });
          abortXHR();
          tmCancel();
        }, time);
      }

      xhr.open('POST', method);

      xhr.withCredentials = credentials;

      if ('overrideMimeType' in xhr) {
        xhr.overrideMimeType('text/plain; charset=x-user-defined');
      }

      xhr.responseType = 'arraybuffer';

      xhr.setRequestHeader('content-type', 'application/grpc-web+proto');
      xhr.setRequestHeader('x-grpc-web', '1');
      xhr.setRequestHeader('x-user-agent', 'grpc-web-ts/1.0');

      if (isFunction(onDownload)) {
        xhr.onprogress = onDownload;
      }

      if (isFunction(onUpload) && isObject(xhr.upload)) {
        xhr.upload.onprogress = onUpload;
      }

      xhr.onreadystatechange = function onready() {
        if (xhr.readyState !== 4) {
          return undefined;
        }

        tmCancel();

        if (xhr.status !== 0 && xhr.status !== 200) {
          return callback({ success: false, error: { message: 'XHR wrong status', httpStatus: xhr.status } });
        }

        const byteSource = toInt8(xhr);

        // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
        if (!byteSource) {
          return callback({ success: false, error: { message: 'GRPC no bytes' } });
        }

        let data: Chunk[] = [];

        try {
          data = chunkParse(byteSource);
        } catch (error) {
          return callback({ success: false, error: { message: 'GRPC parsing error', data: error as unknown } });
        }

        if (data.length === 0) {
          const status = this.getResponseHeader(GRPC_STATUS);
          const message = isPresent(status)
            ? this.getResponseHeader(GRPC_MESSAGE) ?? ''
            : 'Failed to parse GRPC status';
          const grpcCode = isPresent(status) ? Number(status) ?? 0 : undefined;

          return callback({
            success: false,
            error: { message, data: safeJSON(message), httpStatus: xhr.status, grpcCode },
          });
        }

        for (const d of data) {
          if (d.chunkType === ChunkType.MESSAGE) {
            try {
              if (debug) {
                send({
                  method,
                  methodType: 'server_streaming',
                  response: [].slice.call(byteSource),
                });
                logger?.warn(method, byteSource);
              }
              return callback({ success: true, data: Decode(field.decode, d.data) });
            } catch (e) {
              return callback({
                success: false,
                error: { message: 'Decode error', data: e, httpStatus: xhr.status },
              });
            }
          } else if (d.chunkType === ChunkType.TRAILERS) {
            const trailers = d.trailers;
            let grpcCode: number = StatusCode.OK;

            const message = trailers[GRPC_MESSAGE] ?? '';
            const status = trailers?.[GRPC_STATUS];

            if (isString(status)) {
              const code = Number(status);
              grpcCode = code >= 0 ? code : fromHttpStatus(xhr.status);
            }

            return callback({
              success: false,
              error: { message, data: safeJSON(message), httpStatus: xhr.status, grpcCode },
            });
          }
        }
      };

      if (isFunction(transformRequest)) {
        // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
        sendData = (await transformRequest({ xhr, data: values })) || values;
      }

      const encoded = Encode(
        field.encode,
        mask === true
          ? maskWrap(sendData)
          : isObject(mask) && isText(mask.field)
          ? maskWrap(sendData, mask.field, mask.outField)
          : sendData
      );
      const request = encodeRequest(encoded);

      if (debug) {
        send({
          method,
          methodType: 'server_streaming',
          request: [].slice.call(request),
        });
        logger?.warn(method, request);
      }

      xhr.send(request);
    })
      .then(data => {
        if (devtool) {
          send({
            method,
            methodType: 'unary',
            request: sendData,
            response: data.success ? data.data : undefined,
            error: data.success ? undefined : data.error,
          });
          logger?.[data.success ? 'info' : 'error'](method, sendData, data);
        }

        return data;
      })
      .then(data => (isFunction(transformResponse) ? transformResponse({ xhr, data }) : data))
      .catch(data => {
        logger?.error(method, data);
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        return { success: false, error: { data } } as GError;
      });
  }) as GRPC;
};
