/* eslint-disable camelcase */

import { Decode, Encode } from '../src';
import {
  whisk_api_user_v2_Height_Unit,
  whisk_api_user_v2_SearchRecipesResponse,
  whisk_api_user_v2_SearchRecipesResponse_Height_Unit2,
  whisk_api_user_v2_TestItem,
} from './proto';
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
        items: [],
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
        items: [],
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

  it('encode/decode empty message', () => {
    const ser: whisk_api_user_v2_SearchRecipesResponse = {
      dates: [],
      hit: [{ ingredients: [{ name: '' }, { name: '123' }], mapCalories: {}, mapExternal: {}, mapIngredients: {} }],
      date: {
        day: 0,
        month: 0,
        year: 0,
      },
      empty: {},
      items: [],
      size: whisk_api_user_v2_Height_Unit.UNIT_CM,
      size2: whisk_api_user_v2_SearchRecipesResponse_Height_Unit2.UNIT_CM,
    };

    const ser2: whisk.api.user.v2.SearchRecipesResponse = {
      dates: [],
      hit: [{ ingredients: [{ name: '' }, { name: '123' }], mapCalories: {}, mapExternal: {}, mapIngredients: {} }],
      date: {
        day: 0,
        month: 0,
        year: 0,
      },
      empty: {},
      items: [],
      size: whisk.api.user.v2.Height.Unit.UNIT_CM,
      size2: whisk.api.user.v2.SearchRecipesResponse.Height.Unit2.UNIT_CM,
    };

    const binA = Encode(whisk_api_user_v2_SearchRecipesResponse, ser);
    const binB = whisk.api.user.v2.SearchRecipesResponse.encode(ser2).finish();

    expect(Array.from(binA)).toEqual(Array.from(binB));
    expect(Decode(whisk_api_user_v2_SearchRecipesResponse, binA)).toEqual(ser);
    expect(whisk.api.user.v2.SearchRecipesResponse.decode(binB)).toEqual(ser2);
  });
});
