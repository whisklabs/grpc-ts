import { isText } from '@whisklabs/typeguards';
import { promises as fs } from 'fs';
import { join } from 'path';

import { MakeOuts } from './generator';

export const safeString = (str: string) => str.replace(/\./g, '_');

export const camelCase = (str: string) => str.replace(/_[^\d_]/g, (s: string) => s[1].toLocaleUpperCase());

export const errorColor = (title: string, body: string | number = '', comment = '') =>
  `\x1b[31m${title}:\x1b[0m ${body} [${comment}]`;

export function checkDublicate(name: string, out: MakeOuts, comment: string) {
  if (out.names.has(name)) {
    out.errors.push(errorColor('Found dublicate key', name, comment));
  } else {
    out.names.add(name);
  }
}

export const checkSame =
  (out: MakeOuts, type: string, collection = {} as Record<number | string, boolean>) =>
  (key: string | number, comment: string) => {
    if (collection[key]) {
      out.errors.push(errorColor(`Found dublicate ${type}`, key, comment));
    } else {
      collection[key] = true;
    }
  };

export interface Walk<T> {
  filename: string;
  result: T;
}

export interface WalkInit<T> extends Walk<T> {
  each: (params: Walk<T>) => Promise<void> | void;
}

export async function walk<T>({ filename, each, result }: WalkInit<T>): Promise<T> {
  const dirFiles = await fs.readdir(filename);
  for (const item of dirFiles) {
    const filepath = join(filename, item);
    const dir = (await fs.stat(filepath)).isDirectory();
    await (dir ? walk({ each, result, filename: filepath }) : each({ result, filename: filepath }));
  }
  return result;
}

export const toComment = (str: string) => `/** ${str.replace(/\*\//g, '*∕').trim()} */`;

export const joinPath = (...paths: (string | undefined)[]) => safeString(paths.filter(isText).join('_'));
