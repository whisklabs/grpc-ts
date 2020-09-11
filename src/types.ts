/* eslint-disable @typescript-eslint/no-explicit-any */

export type FieldMap = ['map', string, FieldType];
export type FieldRepeated = ['repeated', FieldType];
export type FieldWrapper = ['wrapper', string];

export type FieldType<T = any> = string | Field<T> | FieldMap | FieldRepeated | FieldWrapper;

// 0 - tag, 1 - name, 2 - type, 3 - required, 4 - oneof
export type FieldItem<T> = [number, string, FieldType<T>, 0 | 1, string?];

export type Field<T = unknown> = () => FieldItem<T>[];
export type FieldGet<T extends Field<any>> = T extends Field<infer X> ? X : never;
export type FieldEmpty = Record<string, void>;

export type Service<T extends Field<any>, K extends Field<any>> = {
  name: string;
  encode: T;
  decode: K;
};
export type ServiceRequest<T extends Service<any, any>> = T extends Service<infer X, any> ? FieldGet<X> : never;
export type ServiceResponse<T extends Service<any, any>> = T extends Service<any, infer X> ? FieldGet<X> : never;

export type Values<T extends Record<string, any>> = T[keyof T];
