import { isArray, isArrayBuffer, isDate, isObject, isPresent } from '@whisklabs/typeguards';

import { GError, GSuccess } from './types';

export const HEADER_SIZE = 5;
export const GRPC_STATUS = 'grpc-status';
export const GRPC_MESSAGE = 'grpc-message';

export const encodeRequest = (serialized: Uint8Array) => {
  let len = serialized.length;
  const bytesArray = [0, 0, 0, 0];
  const payload = new Uint8Array(HEADER_SIZE + len);
  for (let i = 3; i >= 0; i--) {
    bytesArray[i] = len % 256;
    len = len >>> 8;
  }
  payload.set(new Uint8Array(bytesArray), 1);
  payload.set(serialized, HEADER_SIZE);
  return payload;
};

export function toInt8(xhr: XMLHttpRequest) {
  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  if (!xhr.response) {
    return false;
  }

  if (isArrayBuffer(xhr.response)) {
    return new Uint8Array(xhr.response);
  } else {
    const buf = [];
    for (let i = 0; i < xhr.responseText.length; ++i) {
      buf.push(xhr.responseText.charCodeAt(i) & 255);
    }
    return new Uint8Array(buf);
  }
}

export const safeJSON = (data: string) => {
  try {
    return JSON.parse(data) as unknown;
  } catch {
    return String(data);
  }
};

export const snakeCase = (str: string, delim = '_') => {
  let res = '';
  let s = '';
  let c = '';
  const l = str.length;

  for (let i = 0; i < l; i++) {
    s = str[i];
    c = s.toLowerCase();
    res += c !== s ? `${delim}${c}` : s;
  }

  return res;
};

export function clone<T = unknown>(source: T): T;
export function clone(source: unknown): unknown {
  const objs: unknown[] = [];

  return cloneInternal(source, objs);
}

export function cloneInternal(source: unknown, objs: unknown[]): unknown {
  if (!isPresent(source) || !isObject(source)) {
    return source;
  }

  const index = objs.indexOf(source);
  if (index > -1) {
    return objs[index];
  }

  objs.push(source);

  if (isDate(source)) {
    const date = new Date();
    date.setTime(source.getTime());
    return date;
  } else if (isArray(source)) {
    const arr: unknown[] = [];
    for (let i = 0, len = source.length; i < len; i++) {
      arr[i] = cloneInternal(source[i], objs);
    }
    return arr;
  } else {
    const res: Record<string, unknown> = {};
    for (const attr in source) {
      // eslint-disable-next-line no-prototype-builtins
      if (source.hasOwnProperty(attr)) {
        res[attr] = cloneInternal(source[attr], objs);
      }
    }
    return res;
  }
}

export const unwrap = async <K, S, E>(
  result: GError | GSuccess<K> | Promise<GError | GSuccess<K>>,
  onSuccess: (data: K) => S | Promise<S>,
  onError?: (error: GError['error']) => E | Promise<E>
): Promise<S | E | undefined> => {
  const resp = await result;
  if (resp.success) {
    return onSuccess(resp.data);
  } else {
    return onError?.(resp.error);
  }
};
