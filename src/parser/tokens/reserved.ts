import { next } from '../comment';
import { Thrower } from '../thrower';
import { Reserved } from '../types';
import { ch, check, cut, cutStr } from '../utils';
import { isNumber, isText } from '../validators';

export function ParseReservedItem(tokens: string[]): Reserved {
  const { results, len, errors } = check({
    tokens,
    rules: [ch(isNumber, { result: true }), ch('to'), ch(['max', isNumber], { result: true })],
  });

  if (errors.length === 0) {
    cut(tokens, len);

    const from = Number(results[0]);
    const to = results[1] === 'max' ? 0x1fffffff : Number(results[1]);

    return { from, to };
  } else {
    const inner = check({
      tokens,
      rules: [ch([isNumber, isText], { result: true })],
    });

    if (inner.errors.length === 0) {
      cut(tokens, inner.len);

      const res = inner.results[0];
      return isNumber(res) ? Number(res) : cutStr(res);
    } else {
      throw new Thrower('reserved', errors.concat(inner.errors));
    }
  }
}

export function ParseReserved(tokens: string[]): Reserved[] {
  const reserved: Reserved[] = [];

  while (tokens.length > 0) {
    switch (next(tokens)) {
      case 'reserved':
      case ',':
        cut(tokens, 1);
        reserved.push(ParseReservedItem(tokens));
        break;

      case ';':
        cut(tokens, 1);
        return reserved;

      case undefined:
        continue;

      default:
        throw new Thrower('reserved', [[`Unexpected token "${tokens[0]}"`, 0]]);
    }
  }

  throw new Thrower('reserved', [['no close tag ";"', 0]]);
}
