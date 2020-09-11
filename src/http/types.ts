/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types */

import { DeepReadonly } from '@whisklabs/deep-readonly';

import { Field, FieldGet, Service, ServiceRequest, ServiceResponse } from '../types';

export type GSuccess<T> = {
  success: true;
  data: T;
};

export type GError = {
  success: false;
  error: {
    data?: unknown;
    message?: string;
    httpStatus?: number;
    grpcCode?: number;
  };
};

type LoggerFn = (message?: any, ...optionalParams: any[]) => void;

export interface ConfigGRPC {
  server: string;
  credentials?: boolean;
  timeout?: number;
  devtool?: boolean;
  debug?: boolean;
  logger?: {
    warn: LoggerFn;
    error: LoggerFn;
    info: LoggerFn;
  };
  transformRequest?<T>(params: { xhr: XMLHttpRequest; data: T }): T | void | Promise<T | void>;
  transformResponse?<T>(params: { data: GSuccess<T> | GError }): GSuccess<T> | GError | Promise<GSuccess<T> | GError>;
}

export interface Cancel {
  (): void;
  abort?(): void;
}

export interface LocalGRPC<T extends Field> {
  mask?:
    | boolean
    | ('mask' extends keyof FieldGet<T>
        ? {
            field: keyof FieldGet<T>;
            outField?: keyof FieldGet<T>;
          }
        : {
            field: keyof FieldGet<T>;
            outField: keyof FieldGet<T>;
          });
  cancel?: Cancel | string;
  timeout?: number;
  onDownload?: (e: ProgressEvent<EventTarget>) => void;
  onUpload?: (e: ProgressEvent<EventTarget>) => void;
}

export type GRPC = <T extends Field, K extends Field>(
  ...[field, values, options]: {} extends ServiceRequest<Service<T, K>>
    ? [Service<T, K>, ServiceRequest<Service<T, K>>?, LocalGRPC<T>?]
    : [Service<T, K>, ServiceRequest<Service<T, K>>, LocalGRPC<T>?]
) => Promise<GSuccess<ServiceResponse<Service<T, K>>> | GError>;

export type GRPCDeep = <T extends Field, K extends Field>(
  ...[field, values, options]: {} extends ServiceRequestDeep<Service<T, K>>
    ? [Service<T, K>, ServiceRequestDeep<Service<T, K>>?, LocalGRPC<T>?]
    : [Service<T, K>, ServiceRequestDeep<Service<T, K>>, LocalGRPC<T>?]
) => Promise<GSuccess<ServiceResponseDeep<Service<DeepReadonly<T>, DeepReadonly<K>>>> | GError>;

// ...[method, params]: T[P]['request'] extends undefined ? [P] : [P, T[P]['request']]

export type FieldGetDeep<T extends Field<any>> = T extends Field<infer X> ? DeepReadonly<X> : never;

export type ServiceRequestDeep<T extends Service<any, any>> = T extends Service<infer X, any> ? FieldGetDeep<X> : never;

export type ServiceResponseDeep<T extends Service<any, any>> = T extends Service<any, infer X>
  ? FieldGetDeep<X>
  : never;
