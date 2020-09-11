/* eslint-disable camelcase */

import { Decode, Encode } from '../src';
import { whisk_api_user_v2_TestItem } from './proto';
import { whisk } from './protobufjs/out';

describe('protobuf wrapper', () => {
  const data: whisk_api_user_v2_TestItem = {
    name: 'sdsd',
    surname: 'SDFV sdfsdf',
    id: 'id',
    mapSearch: {
      abc: {
        dates: [{ day: 1, month: 2, year: 3 }],
        hit: [],
      },
    },
    test: 'xf',
    searches: [],
    date: {
      day: 12,
      year: 12,
      month: 12,
    },
    description: 's',
    array: ['1'],
    extraInformation: {
      abc: 'def',
      xyz: '123',
    },
    story: '123',
  };

  const data2: whisk.api.user.v2.TestItem = {
    name: 'sdsd',
    surname: 'SDFV sdfsdf',
    id: 'id',
    mapSearch: {
      abc: {
        dates: [{ day: 1, month: 2, year: 3 }],
        hit: [],
      },
    },
    test: {
      value: 'xf',
    },
    searches: [],
    date: {
      day: 12,
      year: 12,
      month: 12,
    },
    description: {
      value: 's',
    },
    array: [{ value: '1' }],
    extraInformation: {
      abc: 'def',
      xyz: '123',
    },
    story: '123',
  };

  it('encode/decode', () => {
    const binA = Encode(whisk_api_user_v2_TestItem, data);
    const binB = whisk.api.user.v2.TestItem.encode(data2).finish();

    expect(Array.from(binA)).toMatchObject(Array.from(binB));
    expect(Decode(whisk_api_user_v2_TestItem, binA)).toMatchObject(data);
    expect(whisk.api.user.v2.TestItem.decode(binB)).toMatchObject(data2);
  });
});
