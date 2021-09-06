/**
 * @jest-environment jsdom
 */

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment */

import { isNumber, isString } from '@whisklabs/typeguards';

import { send } from './devtool';

describe('gRPC devtools', () => {
  test('postMessage', cb => {
    // Circular structure
    const testA: any = {};
    const testB: any = {};

    testA.a = testB;
    testB.a = testA;

    window.addEventListener(
      'message',
      event => {
        expect(event.data).toEqual({
          method: 'set',
          methodType: 'unary',
          request: {
            prox: {
              a: 1,
              b: 5,
              c: 0,
              testA,
              testB,
            },
          },
          type: '__GRPCWEB_DEVTOOLS__',
        });
        cb();
      },
      false
    );

    const prox = new Proxy<Record<string, number>>(
      { a: 1, testA, testB },
      {
        set: (obj, el, val) => {
          if (isString(el) && isNumber(val)) {
            obj[el] = val > 0 ? val : 0;
            return true;
          } else {
            return false;
          }
        },
      }
    );

    prox.b = 5;
    prox.c = -5;

    send({ method: 'set', methodType: 'unary', request: { prox } });
  });
});
