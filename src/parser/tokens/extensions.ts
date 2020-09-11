import { ch, check, cut } from '../utils';
import { isNumber } from '../validators';

export function ParseExtensions(tokens: string[]) {
  const { results, len } = check({
    type: 'extensions',
    tokens,
    rules: [
      ch('extensions'),
      ch(isNumber, { result: true }),
      ch('to'),
      ch(['max', isNumber], { result: true }),
      ch(';'),
    ],
  });

  cut(tokens, len);

  const from = Number(results[0]);
  const to = results[1] === 'max' ? 0x1fffffff : Number(results[1]);

  return { from, to };
}
