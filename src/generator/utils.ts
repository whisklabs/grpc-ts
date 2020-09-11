import { MakeOuts } from './generator';

export const safeString = (str: string) => str.replace(/\./g, '_');

export const camelCase = (str: string) => str.replace(/[_.]./g, (s: string) => s[1].toLocaleUpperCase());

export const errorColor = (title: string, body: string | number = '', comment = '') =>
  `\x1b[31m${title}:\x1b[0m ${body} [${comment}]`;

export function checkDublicate(name: string, out: MakeOuts, comment: string) {
  if (out.names.has(name)) {
    out.errors.push(errorColor('Found dublicate key', name, comment));
  } else {
    out.names.add(name);
  }
}

export const checkSame = (out: MakeOuts, type: string, collection = {} as Record<number | string, boolean>) => (
  key: string | number,
  comment: string
) => {
  if (collection[key]) {
    out.errors.push(errorColor(`Found dublicate ${type}`, key, comment));
  } else {
    collection[key] = true;
  }
};
