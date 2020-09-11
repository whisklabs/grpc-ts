import { next, setComment, writeComment } from '../comment';
import { Thrower } from '../thrower';
import { Method } from '../types';
import { ch, check, cut, insertOption, semicolon } from '../utils';
import { isText } from '../validators';
import { ParseOptions } from './options';

export function ParseRPC(tokens: string[]) {
  const { results, len } = check({
    type: 'rpc',
    tokens,
    rules: [
      ch('rpc'),
      ch(isText, { result: true }),
      ch('('),
      ch('stream', { ignore: true, result: true }),
      ch(isText, { result: true }),
      ch(')'),
      ch('returns'),
      ch('('),
      ch('stream', { ignore: true, result: true }),
      ch(isText, { result: true }),
      ch(')'),
    ],
  });

  cut(tokens, len);

  const rpc: Method = {
    name: results[0],
    inputType: results[2],
    outputType: results[4],
    clientStreaming: results[1] === 'stream',
    serverStreaming: results[3] === 'stream',
    options: {},
  };

  setComment(rpc);

  if (tokens[0] === ';') {
    tokens.shift();
    return rpc;
  }

  check({
    type: 'rpc',
    tokens: [tokens[0], tokens[tokens.indexOf('}')]],
    rules: [ch('{'), ch('}')],
  });

  tokens.shift();

  while (tokens.length > 0) {
    switch (next(tokens)) {
      case '}':
        cut(tokens, 1);
        semicolon(tokens);
        writeComment(rpc);
        return rpc;

      case 'option': {
        const { field, value } = ParseOptions(tokens);
        insertOption(rpc.options, field, value);
        break;
      }

      case undefined:
        continue;

      default:
        throw new Thrower('rpc', [[`Unexpected token "${tokens[0]}"`, 0]]);
    }
  }

  throw new Thrower('rpc', [['no close tag "}"', 0]]);
}
