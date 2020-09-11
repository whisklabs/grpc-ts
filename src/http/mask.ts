import { isArray, isObject, isString, isText } from '@whisklabs/typeguards';

import { snakeCase } from './utils';

export const mask = (data: unknown) => ({ paths: maskCalc(data) });

export const maskCalc = (data: unknown, keys: string[] = [], prefix = ''): string[] => {
  if (!isObject(data)) {
    return keys;
  }

  // tslint:disable-next-line: forin
  for (const key in data) {
    const val = data[key];
    const snake = snakeCase(key);
    const newPrefix = isText(prefix) ? `${prefix}.${snake}` : snake;

    if (isArray(val)) {
      keys.push(newPrefix);
    } else if (isObject(val)) {
      maskCalc(val, keys, newPrefix);
    } else {
      keys.push(newPrefix);
    }
  }
  return keys;
};

export const maskWrap = <T>(data: T, rootElement?: keyof T | true, outName = 'mask' as keyof T): T => {
  const d = data as unknown;
  if (isObject(d)) {
    d[outName] = mask(isString(rootElement) ? d[rootElement] : d);
  }
  return data;
};
