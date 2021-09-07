import { isBoolean, isPresent, isString, isText } from '@whisklabs/typeguards';

import { Parser } from '../parser';
import { GOOGLE_WRAPPERS, OPTION_MESSAGE_REQUIRED } from './constants';
import { enums } from './enum';
import { getField, getStruct, isRequiredField } from './field';
import { List, MakeOut, MakeOuts } from './generator';
import { camelCase, checkSame, errorColor, safeString, toComment } from './utils';

export function messages(
  pack: string,
  out: MakeOuts,
  items: Parser.Message[],
  messageRequired?: boolean,
  list: List[] = [],
  parent?: string
) {
  for (const msg of items) {
    const newPack = `${parent ?? pack}_${msg.name}`;
    list = list.concat(
      msg.messages.map(i => ({ name: i.name, pack: newPack })),
      msg.enums.map(i => ({ name: i.name, pack: newPack }))
    );

    message(pack, out, msg, list, messageRequired, parent);

    if (msg.messages.length > 0) {
      messages(pack, out, msg.messages, messageRequired, list, newPack);
    }
  }
}

// eslint-disable-next-line complexity
function message(
  pack: string,
  out: MakeOuts,
  item: Parser.Message,
  list: List[],
  messageRequired?: boolean,
  parent?: string
) {
  const option = item.options[OPTION_MESSAGE_REQUIRED];
  const isMessageRequired = isBoolean(option) ? option : messageRequired;
  const base = `${safeString(parent ?? pack)}_${safeString(item.name)}`;
  enums(base, out, item.enums);

  const runtime: MakeOut[] = [];
  const baseName = safeString(base);
  const oneof = {} as Record<string, Parser.Field[]>;
  // const massagesNames = item.messages.map(m => m.name);

  const packName = `${pack}.${item.name}`;
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
      const required = isRequiredField(field, isMessageRequired);

      if (isText(field.oneof)) {
        field.oneof = camelCase(field.oneof);

        oneof[field.oneof] = oneof[field.oneof] ?? [];
        oneof[field.oneof].push(field);
      } else {
        getComment(field, out);

        const fieldName = getField(
          field,
          fieldPack,
          `in "${baseName}" field "${field.name} = ${field.tag}"`,
          out,
          baseName
        );

        out.dts.push(`  ${naming}${required ? '' : '?'}: ${fieldName}${field.repeated ? '[]' : ''};`);
      }

      const type = getStruct(field, fieldPack, out, baseName);
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

        getComment(field, out);

        const naming = camelCase(field.name);

        const fieldName = getField(
          field,
          fieldPack,
          `in "${baseName}" field "${field.name} = ${field.tag}"`,
          out,
          baseName
        );

        out.dts.push(
          `    | { oneof: '${naming}'; value${isRequiredField(field, isMessageRequired) ? '' : '?'}: ${fieldName}${
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

  if (isText(item.comment)) {
    out.dts.push(toComment(item.comment));
  }
  out.dts.push(`export const ${baseName}: Field<${baseName}>;`);
  out.js.push(`export function ${baseName} () { return [`);
  for (const field of runtime) {
    out.js.push(field);
  }
  out.js.push(']; }');
}
function getComment(field: Parser.Field, out: MakeOuts) {
  let comment = '';
  if (isText(field.options.deprecated)) {
    comment += `@deprecated ${field.options.deprecated}\n`;
  } else if (field.options.deprecated === true) {
    comment += '@deprecated\n';
  }

  if (isText(field.comment)) {
    comment += field.comment;
  }

  if (isText(comment)) {
    out.dts.push(toComment(comment));
  }
}
