import { snakeCase } from '../http/utils';

import { camelCase } from './utils';

describe('camelCase', () => {
  it('camelCase base', () => {
    expect(camelCase('ab_cd_ef')).toBe('abCdEf');
    expect(camelCase('ab_2d_ef')).toBe('ab_2dEf');
    expect(camelCase('___ab_2d___')).toBe('__Ab_2d___');
  });

  const words = ['ab_cd_ef', 'ab_2d_ef', '___ab_2d___'];

  for (const word of words) {
    it(`camelCase: ${word}`, () => {
      expect(snakeCase(camelCase(word))).toBe(word);
    });
  }
});
