/* eslint-disable camelcase */

import { Default } from '../src';

import { whisk_api_user_v2_TestItem, whisk_api_user_v2_TestOneof } from './proto';

describe('protobuf defualt', () => {
  it('get stub build', () => {
    const res = Default(whisk_api_user_v2_TestOneof);

    const base = {
      id: '',
      device: {
        oneof: 'deviceType',
        value: 0,
      },
    };

    expect(base).toEqual(res);
  });

  it('get stub', () => {
    const res = Default(whisk_api_user_v2_TestOneof);

    const base = {
      id: '',
      device: {
        oneof: 'deviceType',
        value: 0,
      },
    };

    expect(base).toEqual(res);
  });

  it('get complex', () => {
    const res = Default(whisk_api_user_v2_TestItem);

    const base: whisk_api_user_v2_TestItem = {
      id: '',
      array: [],
      date: { day: 0, month: 0, year: 0 },
      mapSearch: {},
      name: '',
      searches: [],
      test: '',
      extraInformation: {},
    };

    expect(base).toEqual(res);
  });
});
