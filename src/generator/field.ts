import { isPresent, isString } from '@whisklabs/typeguards';

import { Parser } from '../parser';
import { GOOGLE_WRAPPERS, TYPES } from './constants';
import { EnumsList, MakeOuts } from './generator';
import { safeString } from './utils';

export const getField = (
  field: Parser.Field,
  base: string,
  enumsList: EnumsList,
  name: string,
  out: MakeOuts
): string => {
  const type = field.type;

  if (type === 'map') {
    const to = getField({ type: field.map?.to } as Parser.Field, base, enumsList, name, out);
    const from = getField({ type: field.map?.from } as Parser.Field, base, enumsList, name, out);
    return `Record<${from}, ${to}>`;
  } else if (isString(TYPES[type])) {
    return TYPES[type];
  } else if (isString(TYPES[GOOGLE_WRAPPERS[type]])) {
    return TYPES[GOOGLE_WRAPPERS[type]];
  } else {
    const sName = pathField(type, base, out);
    out.fields.push([sName, name]);
    return enumsList.has(sName) ? `${sName}` : sName;
  }
};

export const getStruct = (field: Parser.Field, base: string, enumsList: EnumsList, out: MakeOuts): string => {
  const type = field.type;

  if (type === 'map') {
    const from = getStruct({ type: field.map?.from } as Parser.Field, base, enumsList, out);
    const to = getStruct({ type: field.map?.to } as Parser.Field, base, enumsList, out);
    return `["map", ${from}, ${to}]`;
  } else if (field.repeated) {
    return `["repeated", ${getStruct({ type } as Parser.Field, base, enumsList, out)}]`;
  } else if (isString(TYPES[type])) {
    return `"${type}"`;
  } else if (isString(GOOGLE_WRAPPERS[type])) {
    return `["wrapper", "${GOOGLE_WRAPPERS[type]}"]`;
  } else {
    const sName = pathField(field.type, base, out);
    return enumsList.has(sName) ? '"enum"' : sName;
  }
};

export const pathField = (field: string, base: string, out: MakeOuts) => {
  let inRoot = false;
  out.roots.forEach(root => {
    inRoot = inRoot || field.startsWith(root);
  });

  return inRoot ? safeString(field) : safeString(`${base}_${field}`);
};

export const isRequiredField = (field: Parser.Field) =>
  isPresent(field.options.required)
    ? field.options.required !== false
    : field.optional
    ? false
    : field.required || field.repeated || field.type === 'map' || isString(TYPES[field.type]);

export const isEnumField = (field: Parser.Field, base: string, enumsList: EnumsList, out: MakeOuts) =>
  enumsList.has(pathField(field.type, base, out));
