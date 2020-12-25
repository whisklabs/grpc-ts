import { isPresent, isString, isText } from '@whisklabs/typeguards';

import { Field, Message } from '../parser/types';
import { GOOGLE_WRAPPERS } from './constants';
import { enums } from './enum';
import { getField, getStruct, isRequired } from './field';
import { EnumsList, List, MakeOut, MakeOuts } from './generator';
import { camelCase, checkDublicate, checkSame, errorColor, safeString } from './utils';

export function messages(
  pack: string,
  out: MakeOuts,
  items: Message[],
  list: List[] = [],
  enumsList: EnumsList,
  parent?: string
) {
  for (const msg of items) {
    const newPack = `${pack}_${msg.name}`;
    list = list.concat(
      msg.messages.map(i => ({ name: i.name, pack: newPack })),
      msg.enums.map(i => ({ name: i.name, pack: newPack }))
    );

    message(pack, out, msg, list, enumsList, parent);

    if (msg.messages.length > 0) {
      messages(pack, out, msg.messages, list, enumsList, newPack);
    }
  }
}

// eslint-disable-next-line complexity
function message(pack: string, out: MakeOuts, item: Message, list: List[], enumsList: EnumsList, parent?: string) {
  const base = `${safeString(parent ?? pack)}_${safeString(item.name)}`;
  enums(base, out, item.enums, enumsList);

  const runtime: MakeOut[] = [];
  const baseName = safeString(base);
  const oneof = {} as Record<string, Field[]>;

  const packName = `${pack}.${item.name}`;
  checkDublicate(baseName, out, `${isString(parent) ? `${parent}.` : ''}${packName}`);
  const cID = checkSame(out, 'id');
  const cName = checkSame(out, 'name');

  if (isString(GOOGLE_WRAPPERS[packName])) {
    const field = item.fields[0];
    if (!(isPresent(field) && field.name === 'value' && field.tag === 1 && field.type === GOOGLE_WRAPPERS[packName])) {
      out.errors.push(errorColor(`Incorrect google wrapper ${packName}`, field.name, `${field.type}, ${field.tag}`));
    }
  }

  if (item.fields.length > 0) {
    out.dts.push(`export type ${baseName} = {`);
    for (const field of item.fields) {
      const find = list.find(i => i.name === field.map?.to || i.name === field.type);
      const fieldPack = isPresent(find) ? find.pack : pack;
      const naming = camelCase(field.name);
      const required = isRequired(field);

      if (isText(field.oneof)) {
        field.oneof = camelCase(field.oneof);

        oneof[field.oneof] = oneof[field.oneof] ?? [];
        oneof[field.oneof].push(field);
      } else {
        if (isText(field.options.deprecated)) {
          out.dts.push(`  /**  @deprecated ${field.options.deprecated} */`);
        } else if (field.options.deprecated === true) {
          out.dts.push('  /**  @deprecated */');
        }

        const fieldName = getField(field, fieldPack, enumsList, `in "${baseName}" field "${naming}"`, out);

        out.dts.push(`  ${naming}${required ? '' : '?'}: ${fieldName}${field.repeated ? '[]' : ''};`);
      }

      const type = getStruct(field, fieldPack, enumsList);
      runtime.push(
        `  [${field.tag}, "${naming}", ${type}, ${required ? '1' : '0'}${
          isText(field.oneof) ? `, "${field.oneof}"` : ''
        }],`
      );

      cID(field.tag, `${isString(parent) ? `${parent}.` : ''}${packName}.${field.name}`);
      cName(naming, `${isString(parent) ? `${parent}.` : ''}${packName}.${field.name}`);
    }

    for (const one in oneof) {
      out.dts.push(`  ${one}?:`);

      for (const field of oneof[one]) {
        const find = list.find(i => i.name === field.map?.to || i.name === field.type);
        const fieldPack = isPresent(find) ? find.pack : pack;

        if (isText(field.options.deprecated)) {
          out.dts.push(`  /**  @deprecated ${field.options.deprecated} */`);
        } else if (field.options.deprecated === true) {
          out.dts.push('  /**  @deprecated */');
        }

        const naming = camelCase(field.name);

        const fieldName = getField(field, fieldPack, enumsList, `in "${baseName}" field "${naming}"`, out);

        out.dts.push(
          `    | { oneof: '${naming}'; value${isRequired(field) ? '' : '?'}: ${fieldName}${
            field.repeated ? '[]' : ''
          }; }`
        );
      }

      out.dts[out.dts.length - 1] += ';';
    }

    out.dts.push('};');
  } else {
    out.dts.push(`export type ${baseName} = FieldEmpty;`);
  }

  out.dts.push(`export const ${baseName}: Field<${baseName}>;`);
  out.js.push(`export function ${baseName} () { return [`);
  for (const field of runtime) {
    out.js.push(field);
  }
  out.js.push(']; }');
}
