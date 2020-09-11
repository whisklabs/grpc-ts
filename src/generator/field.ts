import { isPresent, isString } from '@whisklabs/typeguards';

import { Field } from '../parser/types';
import { GOOGLE_WRAPPERS, TYPES } from './constants';
import { EnumsList, MakeOuts } from './generator';
import { safeString } from './utils';

export const getField = (field: Field, base: string, enumsList: EnumsList, name: string, out: MakeOuts): string => {
  const type = field.type;

  if (type === 'map') {
    const to = getField({ type: field.map?.to } as Field, base, enumsList, name, out);
    const from = getField({ type: field.map?.from } as Field, base, enumsList, name, out);
    return `Record<${from}, ${to}>`;
  } else if (isString(TYPES[type])) {
    return TYPES[type];
  } else if (isString(TYPES[GOOGLE_WRAPPERS[type]])) {
    return TYPES[GOOGLE_WRAPPERS[type]];
  } else {
    const sName = pathField(type, base);
    out.fields.push([sName, name]);
    return enumsList.has(sName) ? `${sName}` : sName;
  }
};

export const getStruct = (field: Field, base: string, enumsList: EnumsList): string => {
  const type = field.type;

  if (type === 'map') {
    const from = getStruct({ type: field.map?.from } as Field, base, enumsList);
    const to = getStruct({ type: field.map?.to } as Field, base, enumsList);
    return `["map", ${from}, ${to}]`;
  } else if (field.repeated) {
    return `["repeated", ${getStruct({ type } as Field, base, enumsList)}]`;
  } else if (isString(TYPES[type])) {
    return `"${type}"`;
  } else if (isString(GOOGLE_WRAPPERS[type])) {
    return `["wrapper", "${GOOGLE_WRAPPERS[type]}"]`;
  } else {
    const sName = pathField(field.type, base);
    return enumsList.has(sName) ? '"enum"' : sName;
  }
};

export const pathField = (field: string, base: string) =>
  /\./.test(field) ? safeString(field) : safeString(`${base}_${field}`);

export const isRequired = (field: Field) =>
  isPresent(field.options.required)
    ? field.options.required !== false
    : field.optional
    ? false
    : field.required || field.repeated || field.type === 'map' || isString(TYPES[field.type]);

export const isEnum = (field: Field, base: string, enumsList: EnumsList) => enumsList.has(pathField(field.type, base));
