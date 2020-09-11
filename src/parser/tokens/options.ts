import { isPresent } from '@whisklabs/typeguards';

import { next, setComment, writeComment } from '../comment';
import { Thrower } from '../thrower';
import { Option, Options } from '../types';
import { ch, check, cut, cutStr, insertOption, semicolon } from '../utils';
import { isNumber, isStr, isText } from '../validators';

const parse = (value?: string) =>
  value === 'true' ? true : value === 'false' ? false : isNumber(value) ? value : isStr(value) ? cutStr(value) : value;

export function OptionValue(tokens: string[]): Option {
  const value = tokens.shift();

  if (value !== '{') {
    return parse(value);
  }

  const result: Options = {};

  let field: string | undefined;

  while (tokens.length > 0) {
    switch (next(tokens)) {
      case '}':
        cut(tokens, 1);
        return result;

      case ':':
        cut(tokens, 1);
        insertOption(result, field, tokens[0] === '[' ? OptionArray(tokens) : OptionValue(tokens));
        break;

      case '{':
        insertOption(result, field, OptionValue(tokens));
        break;

      case undefined:
        continue;

      default:
        field = tokens.shift();
    }
  }

  throw new Thrower('option array', [['no close tag "}"', 0]]);
}

export function OptionArray(tokens: string[]): Option[] {
  const options: Option[] = [];

  while (tokens.length > 0) {
    switch (next(tokens)) {
      case '[':
      case ',':
        cut(tokens, 1);
        options.push(OptionValue(tokens));
        break;

      case ']':
        cut(tokens, 1);
        return options;

      case undefined:
        continue;

      default:
        throw new Thrower('options array', [[`Unexpected token "${tokens[0]}"`, 0]]);
    }
  }

  throw new Thrower('options array', [['no close tag "]"', 0]]);
}

export function ParseOption(tokens: string[]) {
  const { len, results } = check({
    type: 'option',
    tokens,
    rules: [
      ch('(', { ignore: true }),
      ch(isText, { result: true }),
      ch(')', { ignore: true }),
      ch(isText, { result: true, ignore: true }),
      ch('='),
      ch([isText, '{']),
    ],
  });

  cut(tokens, len - 1);
  const field = results[0] + results[1];
  const value = OptionValue(tokens);

  return { field, value };
}

export function InnerOptions(tokens: string[]) {
  const options: Options = {};

  setComment(options);

  while (tokens.length > 0) {
    switch (next(tokens)) {
      case '[':
      case ',': {
        cut(tokens, 1);
        const { field, value } = ParseOption(tokens);

        const path = field.split('.');
        const lastFieldName = path.pop();

        let opt = options;

        for (const p of path) {
          if (!isPresent(opt[p])) {
            opt[p] = {};
          }
          opt = opt[p] as Options;
        }

        insertOption(opt, lastFieldName, value);
        break;
      }

      case ']':
        cut(tokens, 1);
        writeComment(options);
        return options;

      case undefined:
        continue;

      default:
        throw new Thrower('inner options', [[`Unexpected token "${tokens[0]}"`, 0]]);
    }
  }

  throw new Thrower('inner options', [['no close tag "]"', 0]]);
}

export function ParseOptions(tokens: string[]) {
  const { len } = check({ tokens, rules: [ch('option')], type: 'option' });

  cut(tokens, len);

  const result = ParseOption(tokens);

  semicolon(tokens);

  return result;
}
