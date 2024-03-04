import { isString } from '@whisklabs/typeguards';

import { Parser } from '../parser';

import { MakeOuts } from './generator';
import { checkDublicate, joinPath, safeString } from './utils';

export function collectEmuns(pack: string, out: MakeOuts, items: Parser.Enum[]) {
  for (const msg of items) {
    enu(joinPath(pack, msg.name), out, msg);
  }
}

function enu(pack: string, out: MakeOuts, item: Parser.Enum) {
  const eName = safeString(pack);
  out.enumsList.add(eName);
  checkDublicate(eName, out, `${pack}.${item.name}`);
}

export function collectMessages(pack: string, out: MakeOuts, items: Parser.Message[], parent?: string) {
  for (const msg of items) {
    const newPack = joinPath(parent ?? pack, msg.name);
    message(pack, out, msg, parent);
    if (msg.messages.length > 0) {
      collectMessages(pack, out, msg.messages, newPack);
    }
  }
}

function message(pack: string, out: MakeOuts, item: Parser.Message, parent?: string) {
  const base = joinPath(parent ?? pack, item.name);
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
  const sName = joinPath(pack, serv.name, item.name);
  checkDublicate(sName, out, `${pack}.${serv.name}.${item.name}`);
}
