import { Thrower } from '../../src/parser/thrower';
import { ch, check, cutStr, insertOption } from '../../src/parser/utils';
import { isStr } from '../../src/parser/validators';

describe('Utils', () => {
  it('cutStr', () => {
    expect(cutStr()).toEqual('');
  });

  it('isStr', () => {
    expect(isStr()).toEqual(false);
  });

  it('check', () => {
    expect(
      check({
        rules: [ch(isStr)],
        tokens: ['abc'],
      })
    ).toEqual({
      errors: [['Token "abc" not equal " string with quotes "..." or \'...\' "', 0]],
      len: 1,
      range: ['abc'],
      results: [],
    });
  });

  it('check', () => {
    expect(
      check({
        rules: [ch('none', { ignore: true }), ch('123', { strict: true, result: true })],
        // eslint-disable-next-line no-sparse-arrays
        tokens: [, '123'],
      })
    ).toEqual({
      errors: [],
      len: 1,
      range: [undefined, '123'],
      results: ['123'],
    });
  });

  it('insertOption name', () => {
    let er: unknown;
    try {
      insertOption({}, undefined, '');
    } catch (e) {
      er = e;
    }

    expect(er).toEqual(new Thrower('insert option', [['No any field name', 0]]));
  });
});
