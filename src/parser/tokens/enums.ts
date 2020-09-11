import { next, setComment, writeComment } from '../comment';
import { Thrower } from '../thrower';
import { Enum } from '../types';
import { ch, check, cut, insertOption, semicolon } from '../utils';
import { isNumber, isText } from '../validators';
import { InnerOptions, ParseOptions } from './options';

export function EnumVal(tokens: string[]) {
  const { results } = check({
    type: 'enum value',
    tokens: tokens.slice(0, 4).concat(tokens[tokens.indexOf(';')]),
    rules: [ch(isText, { result: true }), ch('='), ch(isNumber, { result: true }), ch([';', '[']), ch([';'])],
  });

  cut(tokens, 3);
  const options = tokens[0] === '[' ? InnerOptions(tokens) : {};
  cut(tokens, 1);

  return {
    name: results[0],
    value: {
      value: Number(results[1]),
      options,
    },
  };
}

export function ParseEnums(tokens: string[]) {
  const { results } = check({
    type: 'enum',
    tokens: tokens.slice(0, 3).concat(tokens[tokens.indexOf('}')]),
    rules: [ch('enum'), ch(isText, { result: true }), ch('{'), ch('}')],
  });

  const en: Enum = {
    name: results[0],
    values: {},
    options: {},
  };

  setComment(en);

  cut(tokens, 3);

  while (tokens.length > 0) {
    switch (next(tokens)) {
      case '}':
        cut(tokens, 1);
        semicolon(tokens);
        writeComment(en);
        return en;

      case 'option': {
        const { field, value } = ParseOptions(tokens);
        insertOption(en.options, field, value);
        break;
      }

      case undefined:
        continue;

      default: {
        const { name, value } = EnumVal(tokens);
        en.values[name] = value;
        writeComment(en.values[name]);
      }
    }
  }

  throw new Thrower('enum', [['no close tag "}"', 0]]);
}
