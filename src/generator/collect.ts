import { isString } from '@whisklabs/typeguards';

import { Parser } from '../parser';
import { MakeOuts } from './generator';
import { checkDublicate, safeString } from './utils';

export function collectEmuns(pack: string, out: MakeOuts, items: Parser.Enum[]) {
  for (const msg of items) {
    enu(`${pack}_${msg.name}`, out, msg);
  }
}

function enu(pack: string, out: MakeOuts, item: Parser.Enum) {
  const eName = safeString(pack);
  out.enumsList.add(eName);
  checkDublicate(eName, out, `${pack}.${item.name}`);
}

export function collectMessages(pack: string, out: MakeOuts, items: Parser.Message[], parent?: string) {
  for (const msg of items) {
    const newPack = `${parent ?? pack}_${msg.name}`;
    message(pack, out, msg, parent);
    if (msg.messages.length > 0) {
      collectMessages(pack, out, msg.messages, newPack);
    }
  }
}

function message(pack: string, out: MakeOuts, item: Parser.Message, parent?: string) {
  const base = `${safeString(parent ?? pack)}_${safeString(item.name)}`;
  collectEmuns(base, out, item.enums);
  const baseName = safeString(base);
  const packName = `${pack}.${item.name}`;
  checkDublicate(baseName, out, `${isString(parent) ? `${parent}.` : ''}${packName}`);
}

export function collectServices(pack: string, out: MakeOuts, items: Parser.Service[] = []) {
  for (const msg of items) {
    service(pack, out, msg);
  }
}

function service(pack: string, out: MakeOuts, item: Parser.Service) {
  for (const msg of item.methods) {
    method(pack, out, msg, item);
  }
}

export function method(pack: string, out: MakeOuts, item: Parser.Method, serv: Parser.Service) {
  const sName = `${safeString(pack)}_${serv.name}_${item.name}`;
  checkDublicate(sName, out, `${pack}.${serv.name}.${item.name}`);
}
