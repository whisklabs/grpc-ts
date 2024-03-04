import { isNumber, isText } from '@whisklabs/typeguards';

import { Parser } from '../parser';

import { MakeOuts } from './generator';
import { checkSame, joinPath, safeString, toComment } from './utils';

export function enums(pack: string, out: MakeOuts, items: Parser.Enum[]) {
  for (const msg of items) {
    enu(joinPath(pack, msg.name), out, msg);
  }
}

function enu(pack: string, out: MakeOuts, item: Parser.Enum) {
  const eName = safeString(pack);

  const cID = checkSame(out, 'id');
  const cName = checkSame(out, 'name');

  if (isText(item.comment)) {
    out.dts.push(toComment(item.comment));
  }

  out.js.push(`export const ${eName} = {`);
  out.dts.push(`export const ${eName}: {`);

  for (const field in item.values) {
    const val = item.values[field].value;
    const comment = item.values[field].comment;
    if (isNumber(val) && !isNaN(val) && !isInvalidEnumField(field, val)) {
      cID(val, `${pack}.${field}`);
      cName(field, `${pack}.${field}`);
      out.js.push(`  ${field}: ${val},`);
      if (isText(comment)) {
        out.dts.push(toComment(comment));
      }
      out.dts.push(`  readonly ${field}: ${val},`);
    }
  }

  out.js.push('};');
  out.dts.push('};');
  out.dts.push(`export type ${eName} = Values<typeof ${eName}>;`);
}

const isInvalidEnumField = (field: string, val: number) =>
  val === 0 && (field.endsWith('_UNSPECIFIED') || field.endsWith('_INVALID'));
