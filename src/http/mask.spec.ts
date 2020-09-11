import { mask, maskWrap } from './mask';

describe('gRPC mask', () => {
  it('Mask empty', () => {
    expect(mask(undefined)).toEqual({ paths: [] });
  });

  it('Mask generator', () => {
    const req = {
      id: '1',
      settings: {
        personalDetails: {
          firstName: 'firstName',
          lastName: 'lastName',
          photoUrl: 'http://yandex.com',
          gender: 1,
          country: 'US',
          zipcode: '94123',
          language: 'en',
          activityLevel: 1,
          age: 100,
          height: { unit: 1, value: 66 },
          weight: { unit: 2, value: 99 },
          healthGoals: {
            list: [3, 4],
          },
        },
      },
    };

    const m = mask(req.settings);
    expect(m.paths).toEqual([
      'personal_details.first_name',
      'personal_details.last_name',
      'personal_details.photo_url',
      'personal_details.gender',
      'personal_details.country',
      'personal_details.zipcode',
      'personal_details.language',
      'personal_details.activity_level',
      'personal_details.age',
      'personal_details.height.unit',
      'personal_details.height.value',
      'personal_details.weight.unit',
      'personal_details.weight.value',
      'personal_details.health_goals.list',
    ]);
  });

  it('Mask null values', () => {
    const req = {
      settings: {
        personalDetails: {
          firstName: undefined,
          gender: 1,
          age: 100,
          healthGoals: {
            list: [],
          },
        },
      },
    };
    const m = mask(req.settings);
    expect(m.paths).toEqual([
      'personal_details.first_name',
      'personal_details.gender',
      'personal_details.age',
      'personal_details.health_goals.list',
    ]);
    expect(req.settings?.personalDetails?.firstName).toBeUndefined();
  });

  it('Mask wrap empty', () => {
    expect(maskWrap(undefined)).toEqual(undefined);
  });

  it('Mask wrap', () => {
    const req = {
      id: 1,
      settings: {
        personalDetails: {
          firstName: undefined,
          gender: 1,
          age: 100,
          healthGoals: {
            list: [],
          },
        },
      },
    };

    const res = maskWrap(req, 'settings');

    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-explicit-any
    expect((res as any).mask).toEqual({
      paths: [
        'personal_details.first_name',
        'personal_details.gender',
        'personal_details.age',
        'personal_details.health_goals.list',
      ],
    });
  });

  it('Mask wrap', () => {
    const req = {
      id: 1,
      settings: {
        personalDetails: {
          firstName: undefined,
          gender: 1,
          age: 100,
          healthGoals: {
            list: [],
          },
        },
      },
    };

    const res = maskWrap(req, true);

    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-explicit-any
    expect((res as any).mask).toEqual({
      paths: [
        'id',
        'settings.personal_details.first_name',
        'settings.personal_details.gender',
        'settings.personal_details.age',
        'settings.personal_details.health_goals.list',
      ],
    });
  });

  it('Mask wrap', () => {
    const req = {
      id: 1,
      settings: {
        personalDetails: {
          firstName: undefined,
          gender: 1,
          age: 100,
          healthGoals: {
            list: [],
          },
        },
      },
    };

    const res = maskWrap(req, 'settings', 'id');

    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-explicit-any
    expect((res as any).id).toEqual({
      paths: [
        'personal_details.first_name',
        'personal_details.gender',
        'personal_details.age',
        'personal_details.health_goals.list',
      ],
    });
  });
});
