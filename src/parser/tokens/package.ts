import { ch, check, cut } from '../utils';
import { isText } from '../validators';

export function ParsePackage(tokens: string[]) {
  const { len, results } = check({
    type: 'package',
    tokens,
    rules: [ch('package'), ch(isText, { result: true }), ch(';')],
  });

  cut(tokens, len);
  return results[0];
}
