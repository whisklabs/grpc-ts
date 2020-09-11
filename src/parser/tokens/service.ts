import { next, setComment, writeComment } from '../comment';
import { Thrower } from '../thrower';
import { Service } from '../types';
import { ch, check, cut, insertOption, semicolon } from '../utils';
import { isText } from '../validators';
import { ParseOptions } from './options';
import { ParseRPC } from './rpc';

export function ParseService(tokens: string[]) {
  const { results, len } = check({
    type: 'service',
    tokens,
    rules: [ch('service'), ch(isText, { result: true }), ch('{')],
  });

  cut(tokens, len);

  const service: Service = {
    name: results[0],
    methods: [],
    options: {},
  };

  setComment(service);

  while (tokens.length > 0) {
    if (tokens[0] === '}') {
      tokens.shift();
      semicolon(tokens);
      writeComment(service);
      return service;
    }

    switch (next(tokens)) {
      case 'option': {
        const { field, value } = ParseOptions(tokens);
        insertOption(service.options, field, value);
        break;
      }

      case 'rpc':
        service.methods.push(ParseRPC(tokens));
        break;

      case undefined:
        continue;

      default:
        throw new Thrower('rpc', [[`Unexpected token in service: ${tokens[0]}`, 0]]);
    }
  }

  throw new Thrower('rpc', [['no close tag "}"', 0]]);
}
