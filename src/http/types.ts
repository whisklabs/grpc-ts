/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types */

import { DeepReadonly } from '@whisklabs/deep-readonly';

import { Field, FieldGet, Service, ServiceRequest, ServiceResponse } from '../types';

export type GSuccess<T> = {
  success: true;
  data: T;
  error?: {
    data?: unknown;
    message?: string;
    httpStatus?: number;
    grpcCode?: number;
  };
};

export type GError = {
  success: false;
  data?: undefined;
  error: {
    data?: unknown;
    message?: string;
    httpStatus?: number;
    grpcCode?: number;
  };
};

export type GResult<T> = {
  success: never;
  data?: T;
  error?: {
    data?: unknown;
    message?: string;
    httpStatus?: number;
    grpcCode?: number;
  };
};

export type GOutput<T> = GSuccess<T> | GError | GResult<T>;

type LoggerFn = (message?: any, ...optionalParams: any[]) => void;

export interface ConfigGRPC<Meta = unknown> {
  server: string | ((method: string) => string);
  credentials?: boolean;
  timeout?: number;
  devtool?: boolean;
  debug?: boolean;
  logger?: {
    warn: LoggerFn;
    error: LoggerFn;
    info: LoggerFn;
  };
  transformRequest?<T>(params: { xhr: XMLHttpRequest; data: T; meta?: Meta }): T | void | Promise<T | void>;
  transformResponse?<T>(params: {
    xhr: XMLHttpRequest;
    data: GOutput<T>;
    meta?: Meta;
  }): GOutput<T> | Promise<GOutput<T>>;
}

export interface Cancel {
  (): void;
  abort?(): void;
}

export interface LocalGRPC<T extends Field, Meta = unknown> {
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
  meta?: Meta;
}

export type GRPC<Meta = unknown> = <T extends Field, K extends Field>(
  ...[field, values, options]: {} extends ServiceRequest<Service<T, K>>
    ? [Service<T, K>, ServiceRequest<Service<T, K>>?, LocalGRPC<T, Meta>?]
    : [Service<T, K>, ServiceRequest<Service<T, K>>, LocalGRPC<T, Meta>?]
) => Promise<GOutput<ServiceResponse<Service<T, K>>>>;

export type GRPCDeep<Meta = unknown> = <T extends Field, K extends Field>(
  ...[field, values, options]: {} extends ServiceRequestDeep<Service<T, K>>
    ? [Service<T, K>, ServiceRequestDeep<Service<T, K>>?, LocalGRPC<T, Meta>?]
    : [Service<T, K>, ServiceRequestDeep<Service<T, K>>, LocalGRPC<T, Meta>?]
) => Promise<GOutput<ServiceResponseDeep<Service<DeepReadonly<T>, DeepReadonly<K>>>>>;

// ...[method, params]: T[P]['request'] extends undefined ? [P] : [P, T[P]['request']]

export type FieldGetDeep<T extends Field<any>> = T extends Field<infer X> ? DeepReadonly<X> : never;

export type ServiceRequestDeep<T extends Service<any, any>> = T extends Service<infer X, any> ? FieldGetDeep<X> : never;

export type ServiceResponseDeep<T extends Service<any, any>> = T extends Service<any, infer X>
  ? FieldGetDeep<X>
  : never;
