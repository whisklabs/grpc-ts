import { next } from '../comment';
import { Thrower } from '../thrower';
import { Field } from '../types';
import { ch, check, cut } from '../utils';
import { isText } from '../validators';
import { ParseField } from './field';

export function ParseOneOf(tokens: string[]) {
  const fields: Field[] = [];

  const { len, results } = check({
    type: 'oneof',
    tokens,
    rules: [ch('oneof'), ch(isText, { result: true }), ch('{')],
  });

  cut(tokens, len);

  const fieldName = results[0];

  while (tokens.length > 0) {
    switch (next(tokens)) {
      case '}':
        cut(tokens, 1);

        return fields;

      case undefined:
        continue;

      default: {
        const field = ParseField(tokens, true);
        field.oneof = fieldName;
        fields.push(field);
      }
    }
  }

  throw new Thrower('oneof', [['no close tag "}"', 0]]);
}
