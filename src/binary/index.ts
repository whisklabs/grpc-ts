/* eslint-disable @typescript-eslint/strict-boolean-expressions, @typescript-eslint/no-explicit-any */

import { isArray, isFunction, isObject, isPresent, isString, isText } from '@whisklabs/typeguards';

import { Field, FieldGet, FieldItem, FieldType } from '../types';
import { Bytes, MapStruct, WrapperStruct } from './constant';
import { getDefault } from './default';
import { PACKED } from './packed';
import { BufRead, ReadMapKeys, readMap, readPacked, readVarint, skip } from './read';
import {
  BufWrite,
  WriteMapKeys,
  WriteMapRawKeys,
  writeMap,
  writeMapRaw,
  writePacked,
  writeTag,
  writeVarint,
} from './write';

type scructs = Record<string, FieldItem<unknown>>;
type fSt = Field & { f: FieldItem<unknown>[]; s: scructs };

function GetStruct(struct: Field) {
  const st = struct as fSt;
  let { s, f } = st;
  if (s && f) {
    return { s, f };
  }

  s = s || {};
  f = f || struct();

  for (const field of f) {
    s[field[0]] = field;
  }

  st.f = f;
  st.s = s;

  return { s, f };
}

export const Encode = <T extends Field>(struct: T, obj: FieldGet<T>): Uint8Array =>
  EncodeHelper(new BufWrite(), struct, obj).get();

function EncodeHelper(buf: BufWrite, struct: Field, obj: unknown) {
  const { f } = GetStruct(struct);

  if (isObject(obj)) {
    for (const [tag, fieldName, item, _, oneof] of f) {
      const one = isText(oneof) ? obj[oneof] : undefined;
      const val = isObject(one) && fieldName === one.oneof ? one.value : obj[fieldName];
      if (val) {
        EncodeWrite(buf, item, tag, val);
      }
    }
  }

  return buf;
}

function EncodeWrite(buf: BufWrite, item: FieldType, tag: number, val: unknown) {
  if (isString(item) && writeMap[item as WriteMapKeys]) {
    writeMap[item as WriteMapKeys](buf, tag, val as never);
  } else if (isFunction(item)) {
    const enc = EncodeHelper(new BufWrite(), item, val);
    if (enc.buf.length) {
      writeTag(buf, tag, Bytes);
      writeVarint(buf, enc.buf.length);
      buf.concat(enc.buf);
    }
  } else if (isArray(item)) {
    if (item[0] === 'repeated' && isArray(val)) {
      if (PACKED[item[1] as string]) {
        writePacked(writeMapRaw[item[1] as WriteMapRawKeys], buf, tag, val);
      } else {
        for (const v of val) {
          EncodeWrite(buf, item[1], tag, v);
        }
      }
    } else if (item[0] === 'map' && isObject(val)) {
      for (const key in val) {
        const value = val[key];
        EncodeWrite(buf, MapStruct(item), tag, { key, value });
      }
    } else if (item[0] === 'wrapper') {
      EncodeWrite(buf, WrapperStruct(item[1]), tag, { value: val });
    }
  }
}

export const Decode = <T extends Field>(struct: T, buffer: Uint8Array) =>
  DecodeHelper(new BufRead(buffer), struct) as FieldGet<T>;

function DecodeDefault<T extends Record<string, any>>(struct: Field, result = {} as T) {
  const { f } = GetStruct(struct);

  for (const field of f) {
    const [, nameField, item, required, oneof] = field;

    if (required !== 1 || isPresent(result[nameField])) {
      continue;
    }

    if (oneof) {
      if (!result[oneof]) {
        result[oneof as keyof T] = {
          oneof: nameField,
          value: GetDefault(item),
        } as T[keyof T];
      }
    } else {
      const val = GetDefault(item);
      if (isPresent(val)) {
        result[nameField as keyof T] = val as T[keyof T];
      }
    }
  }

  return result;
}

export const Default = <T extends Field>(struct: T) => DecodeDefault(struct) as FieldGet<T>;

const GetDefault = (item: FieldType) =>
  isString(item)
    ? getDefault(item)
    : isFunction(item)
    ? DecodeDefault(item)
    : item[0] === 'repeated'
    ? []
    : item[0] === 'map'
    ? {}
    : item[0] === 'wrapper'
    ? getDefault(item[1])
    : undefined;

function DecodeHelper<T extends Record<string, any>>(b: BufRead, struct: Field, result = {} as T, end?: number) {
  const { s } = GetStruct(struct);

  end = end || b.buf.length;

  while (b.pos < end) {
    const val = readVarint(b);
    const tag = val >> 3;
    const startPos = b.pos;

    b.type = val & 0x7;

    if (s[tag]) {
      const [, nameField, item, , oneof] = s[tag];
      DecodeRead(b, nameField, result, item);

      if (oneof) {
        if (result[nameField]) {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          result[oneof as keyof T] = { oneof: nameField, value: result[nameField] } as T[keyof T];
        }
        delete result[nameField];
      }
    }

    if (b.pos === startPos) {
      skip(b, val);
    }
  }

  return DecodeDefault(struct, result);
}

function DecodeRead(b: BufRead, fieldName: string, result: Record<string, unknown>, item: FieldType) {
  if (isString(item)) {
    if (readMap[item as ReadMapKeys]) {
      result[fieldName] = getDefault(item, readMap[item as ReadMapKeys](b));
    }
  } else if (isFunction(item)) {
    result[fieldName] = DecodeHelper(b, item, {}, readVarint(b) + b.pos);
  } else if (isArray(item)) {
    if (item[0] === 'repeated') {
      if (isString(item[1]) && PACKED[item[1]]) {
        result[fieldName] = readPacked(readMap[item[1] as ReadMapKeys], b);
      } else {
        const mm = result[fieldName];
        const m = isArray(mm) ? mm : [];
        result[fieldName] = m;
        const o = {} as { out: unknown };
        DecodeRead(b, 'out', o, item[1]);
        m.push(o.out);
      }
    } else if (item[0] === 'map') {
      const mm = result[fieldName];
      const m = isObject(mm) ? mm : {};
      result[fieldName] = m;
      const o = DecodeHelper(b, MapStruct(item), {} as { key: string; value: unknown }, readVarint(b) + b.pos);
      m[o.key] = o.value;
    } else if (item[0] === 'wrapper') {
      const o = DecodeHelper(b, WrapperStruct(item[1]), {} as { value: unknown }, readVarint(b) + b.pos);
      result[fieldName] = o.value;
    }
  }
}
