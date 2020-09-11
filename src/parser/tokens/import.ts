import { ch, check, cut, cutStr } from '../utils';
import { isStr } from '../validators';

export function ParseImport(tokens: string[]) {
  const { len, results } = check({
    type: 'import',
    tokens,
    rules: [ch('import'), ch(isStr, { result: true }), ch(';')],
  });

  cut(tokens, len);
  return cutStr(results[0]);
}
