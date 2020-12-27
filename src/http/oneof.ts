import { isFunction, isObject, isString } from '@whisklabs/typeguards';

interface OneofWrapper<T> {
  item: T;
}

interface Oneof<T = unknown> {
  oneof?: T;
  value?: unknown;
}

export function oneof<T extends Oneof<unknown>, TValue extends string, Result>(
  base?: T | undefined,
  key?: (TValue extends T['oneof'] ? TValue : T['oneof']) | undefined,
  fn?: ((v: OneofWrapper<Extract<T, Oneof<TValue>>>['item']['value']) => Result) | undefined
): Result | undefined;
export function oneof<T extends Oneof<unknown>, TValue extends string, Result>(
  base?: T | undefined,
  key?: (TValue extends T['oneof'] ? TValue : T['oneof']) | undefined
): OneofWrapper<Extract<T, Oneof<TValue>>>['item']['value'] | undefined;
export function oneof<T extends Oneof, TValue extends string, Result>(
  base?: OneofWrapper<T>['item'],
  key?: TValue extends OneofWrapper<T>['item']['oneof'] ? TValue : OneofWrapper<T>['item']['oneof'],
  fn?: (v: OneofWrapper<Extract<T, Oneof<TValue>>>['item']['value']) => Result
): Result | OneofWrapper<Extract<T, Oneof<TValue>>>['item']['value'] | undefined {
  return isString(key) && isObject(base)
    ? base.oneof === key
      ? isFunction(fn)
        ? fn(base.value)
        : base.value
      : undefined
    : base?.value;
}

export const oneis = <T extends Oneof, TValue extends string>(
  base?: OneofWrapper<T>['item'],
  key?: TValue extends OneofWrapper<T>['item']['oneof'] ? TValue : OneofWrapper<T>['item']['oneof']
): base is OneofWrapper<Extract<T, Oneof<TValue>>>['item'] => (isObject(base) ? base.oneof === key : false);
