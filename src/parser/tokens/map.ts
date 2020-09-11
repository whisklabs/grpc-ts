import { ch, check, cut } from '../utils';
import { isText } from '../validators';

export function ParseMap(tokens: string[]) {
  const { len, results } = check({
    type: 'map',
    tokens,
    rules: [
      ch('map'),
      ch('<'),
      ch(isText, { result: true }),
      ch(','),
      ch(isText, { result: true }),
      ch('>'),
      ch(isText, { result: true }),
    ],
  });

  cut(tokens, len);

  return {
    type: 'map',
    map: {
      from: results[0],
      to: results[1],
    },
    name: results[2],
  };
}
