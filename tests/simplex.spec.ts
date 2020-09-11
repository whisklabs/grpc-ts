/* eslint-disable camelcase */

import { Decode, Encode } from '../src';
import { whisk_api_shared_v1_Test, whisk_api_user_v2_ActivityLevel, whisk_api_user_v2_GetMeResponse } from './proto';
import { whisk } from './protobufjs/out';

describe('protobuf simplex', () => {
  const data = {
    user: {
      id: '10254b04258eaea41d5b840805f32e2df48',
      email: 'a.kuzminov@samsungnext.com',
      phone: '1234',
      mapHealthGoal: {},
      mapIngredient: {},
      userSettings: {
        personalDetails: {
          firstName: 'Alexander',
          lastName: 'Kuzminov',
          photoUrl:
            'https://whisk-res.cloudinary.com/image/upload/v1560631102/avatar/b6372002149329dc39266b57e6ead022.jpg',
          gender: 1 as const,
          country: 'RU',
          zipcode: '127473',
          language: 'en-US',
          activityLevel: whisk_api_user_v2_ActivityLevel.ACTIVITY_LEVEL_VERY_ACTIVE,
          age: 11,
          height: {
            value: 53,
            unit: 2 as const,
          },
          weight: {
            value: 74,
            unit: 2 as const,
          },
          healthGoals: {
            list: [1 as const],
          },
          yearOfBirth: 2009,
        },
        foodPreferences: {
          diets: 'df',
          avoidanceList: ['df', 'aa'],
          dislikedIngredients: {
            list: [
              {
                name: 'Eggs',
                canonicalName: 'EGG',
              },
              {
                name: 'Liver',
                canonicalName: 'LIVER',
              },
            ],
          },
          nutritionPreferences: [],
          organicPreference: 1 as const,
        },
        cookingPreferences: {
          householdAdults: {
            size: 4,
          },
          // householdChildren: {}, // TODO: binary check
          cookingExperience: 1 as const,
          cookingMaxTime: {
            time: 30,
          },
        },
        shoppingPreferences: {
          budgetGoal: 3 as const,
        },
      },
      hasPassword: true,
      recommendations: {
        dailyCalories: 1655,
      },
    },
  };

  it('encode/decode', () => {
    const binA = Encode(whisk_api_user_v2_GetMeResponse, data);
    const binB = whisk.api.user.v2.GetMeResponse.encode(data).finish();

    expect(Array.from(binA)).toMatchObject(Array.from(binB));

    const resultA1 = Decode(whisk_api_user_v2_GetMeResponse, binA);
    const resultA2 = Decode(whisk_api_user_v2_GetMeResponse, binB);
    const resultB1 = whisk.api.user.v2.GetMeResponse.decode(binA);
    const resultB2 = whisk.api.user.v2.GetMeResponse.decode(binB);

    // original
    expect(resultA1).toMatchObject(data);
    expect(resultA2).toMatchObject(data);
    expect(resultB1).toMatchObject(data);
    expect(resultB2).toMatchObject(data);

    // self
    expect(resultA1).toMatchObject(resultA2);
    expect(resultB1).toMatchObject(resultB2);

    // cross
    expect(resultA1).toMatchObject(resultB1);
    expect(resultA2).toMatchObject(resultB2);
  });

  it('bench', () => {
    const b: whisk_api_shared_v1_Test = {
      // eslint-disable-next-line id-blacklist
      string: 'Lorem ipsum dolor sit amet.',
      uint32: 9000,
      inner: {
        int32: 20161110,
        innerInner: {
          long: 1051,
          enum: 1,
          sint32: -42,
        },
        outer: {
          bool: [true, false, false, true, false, false, true],
          double: 204.8,
          // eslint-disable-next-line id-blacklist
          string: ['abc', 'cde'],
          uint32: [213, 453, 123],
        },
      },
      float: 0.25,
    };

    const binA = Encode(whisk_api_shared_v1_Test, b);
    const binB = whisk.api.shared.v1.Test.encode(b).finish();

    expect(Array.from(binA)).toMatchObject(Array.from(binB));
    expect(Decode(whisk_api_shared_v1_Test, binA)).toMatchObject(b);
  });
});
