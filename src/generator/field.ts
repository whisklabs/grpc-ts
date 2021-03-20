import { isPresent, isString } from '@whisklabs/typeguards';

import { Parser } from '../parser';
import { GOOGLE_WRAPPERS, TYPES } from './constants';
import { MakeOuts } from './generator';
import { safeString } from './utils';

export const getField = (field: Parser.Field, base: string, name: string, out: MakeOuts, baseName: string): string => {
  const type = field.type;

  if (type === 'map') {
    const to = getField({ type: field.map?.to } as Parser.Field, base, name, out, baseName);
    const from = getField({ type: field.map?.from } as Parser.Field, base, name, out, baseName);
    return `Record<${from}, ${to}>`;
  } else if (isString(TYPES[type])) {
    return TYPES[type];
  } else if (isString(TYPES[GOOGLE_WRAPPERS[type]])) {
    return TYPES[GOOGLE_WRAPPERS[type]];
  } else {
    const sName = pathField(type, base, out, baseName);
    out.fields.push([sName, name]);
    return out.enumsList.has(sName) ? `${sName}` : sName;
  }
};

export const getStruct = (field: Parser.Field, base: string, out: MakeOuts, baseName: string): string => {
  const type = field.type;

  if (type === 'map') {
    const from = getStruct({ type: field.map?.from } as Parser.Field, base, out, baseName);
    const to = getStruct({ type: field.map?.to } as Parser.Field, base, out, baseName);
    return `["map", ${from}, ${to}]`;
  } else if (field.repeated) {
    return `["repeated", ${getStruct({ type } as Parser.Field, base, out, baseName)}]`;
  } else if (isString(TYPES[type])) {
    return `"${type}"`;
  } else if (isString(GOOGLE_WRAPPERS[type])) {
    return `["wrapper", "${GOOGLE_WRAPPERS[type]}"]`;
  } else {
    const sName = pathField(field.type, base, out, baseName);
    return out.enumsList.has(sName) ? '"enum"' : sName;
  }
};

export const pathField = (field: string, base: string, out: MakeOuts, parent?: string) => {
  let inRoot = false;
  out.packagesList.forEach(root => {
    inRoot = inRoot || field.startsWith(root);
  });

  // Absolute path
  if (inRoot) {
    return safeString(field);
  }

  // Relative path with recursive check
  if (isString(parent) && field.indexOf('.') > -1) {
    const safeBase = safeString(base);
    const par = (parent.startsWith(safeBase) ? parent.slice(safeBase.length + 1) : parent).split('_');

    while (par.length) {
      const current = par.join('_');
      const tryName = safeString(`${base}_${current}_${field}`);

      if (out.names.has(tryName)) {
        return tryName;
      }

      par.pop();
    }
  }

  // Common path
  return safeString(`${base}_${field}`);
};

export const isRequiredField = (field: Parser.Field) =>
  isPresent(field.options.required)
    ? field.options.required !== false
    : field.optional
    ? false
    : field.required || field.repeated || field.type === 'map' || isString(TYPES[field.type]);

export const isEnumField = (field: Parser.Field, base: string, out: MakeOuts, parent?: string) =>
  out.enumsList.has(pathField(field.type, base, out, parent));
