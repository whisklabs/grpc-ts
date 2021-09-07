import { isObject } from '@whisklabs/typeguards';

import { next, writeComment } from '../comment';
import { Thrower } from '../thrower';
import { Message } from '../types';
import { ch, check, cut, insertOption } from '../utils';
import { isNumber, isText } from '../validators';
import { ParseEnums } from './enums';
import { ParseExtensions } from './extensions';
import { ParseField } from './field';
import { ParseOneOf } from './oneof';
import { ParseOptions } from './options';
import { ParseReserved } from './reserved';

export function ParseExtend(tokens: string[]) {
  return {
    name: tokens[1],
    message: ParseMessage(tokens),
  };
}

export function MessageBody(tokens: string[], name: string) {
  const message: Message = {
    name,
    enums: [],
    options: {},
    messages: [],
    fields: [],
    extends: [],
    extensions: [],
    reserved: [],
  };

  writeComment(message);

  while (tokens.length > 0) {
    switch (next(tokens)) {
      case '}':
        tokens.shift();
        writeComment(message);
        CheckReserved(message);
        return message;

      case 'map':
      case 'repeated':
      case 'optional':
      case 'required':
        message.fields.push(ParseField(tokens));
        break;

      case 'enum':
        message.enums.push(ParseEnums(tokens));
        break;

      case 'message':
        message.messages.push(ParseMessage(tokens));
        break;

      case 'extensions':
        message.extensions.push(ParseExtensions(tokens));
        break;

      case 'oneof':
        message.fields = message.fields.concat(ParseOneOf(tokens));
        break;

      case 'extend':
        message.extends.push(ParseExtend(tokens));
        break;

      case ';':
        tokens.shift();
        break;

      case 'reserved':
        message.reserved.push(ParseReserved(tokens));
        break;

      case 'option': {
        const { field, value } = ParseOptions(tokens);
        insertOption(message.options, field, value);
        break;
      }

      case undefined:
        continue;

      default:
        message.fields.push(ParseField(tokens, true));
    }
  }

  throw new Thrower('message', [['no close tag "}"', 0]]);
}

function CheckReserved(message: Message) {
  for (const reserved of message.reserved) {
    for (const reserve of reserved) {
      for (const field of message.fields) {
        if (isText(reserve) && reserve === field.name) {
          throw new Thrower('reserved', [[`Field name "${field.name}" in message "${message.name}" is reserved`, 0]]);
        } else if (isNumber(reserve) && reserve === field.tag) {
          throw new Thrower('reserved', [
            [`Field "${field.name}" in message "${message.name}" with tag "${field.tag}" is reserved`, 0],
          ]);
        } else if (isObject(reserve) && reserve.from <= field.tag && field.tag <= reserve.to) {
          throw new Thrower('reserved', [
            [
              // eslint-disable-next-line max-len
              `Field "${field.name}" with tag "${field.tag}" in message "${message.name}" is reserved between ${reserve.from} to ${reserve.to}`,
              0,
            ],
          ]);
        }
      }
    }
  }
}

export function ParseMessage(tokens: string[]) {
  const { len } = check({
    type: 'message',
    tokens: [tokens[0], tokens[1], tokens[2], tokens[tokens.indexOf('}')]],
    rules: [ch(['extend', 'message']), ch(isText), ch('{'), ch('}')],
  });

  const [, messageName] = cut(tokens, len - 1);

  return MessageBody(tokens, messageName);
}
