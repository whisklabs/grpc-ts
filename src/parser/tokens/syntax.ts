import { ch, check, cut, cutStr } from '../utils';
import { isProto } from '../validators';

export function ParseSyntax(tokens: string[]) {
  const { range, len } = check({
    type: 'syntax',
    tokens,
    rules: [ch('syntax'), ch('='), ch(isProto), ch(';')],
  });

  cut(tokens, len);

  return cutStr(range[2]) === 'proto2' ? 2 : 3;
}
