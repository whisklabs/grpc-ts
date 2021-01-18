import { isNumber } from '@whisklabs/typeguards';

import { Parser } from '../parser';
import { EnumsList, MakeOuts } from './generator';
import { checkDublicate, checkSame, safeString } from './utils';

export function enums(pack: string, out: MakeOuts, items: Parser.Enum[], enumsList: EnumsList) {
  for (const msg of items) {
    enu(`${pack}_${msg.name}`, out, msg, enumsList);
  }
}

function enu(pack: string, out: MakeOuts, item: Parser.Enum, enumsList: EnumsList) {
  const eName = safeString(pack);
  enumsList.add(eName);

  checkDublicate(eName, out, `${pack}.${item.name}`);
  const cID = checkSame(out, 'id');
  const cName = checkSame(out, 'name');

  out.js.push(`export const ${eName} = {`);
  out.dts.push(`export const ${eName}: {`);

  for (const field in item.values) {
    const val = item.values[field].value;
    if (isNumber(val) && !isNaN(val) && !isInvalidEnumField(field, val)) {
      cID(val, `${pack}.${field}`);
      cName(field, `${pack}.${field}`);
      out.js.push(`  ${field}: ${val},`);
      out.dts.push(`  readonly ${field}: ${val},`);
    }
  }

  out.js.push('};');
  out.dts.push('};');
  out.dts.push(`export type ${eName} = Values<typeof ${eName}>;`);
}

const isInvalidEnumField = (field: string, val: number) =>
  val === 0 && (field.endsWith('_UNSPECIFIED') || field.endsWith('_INVALID'));
