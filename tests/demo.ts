/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable no-console, camelcase */

import {
  Default,
  GRPCDeep,
  ServiceRequest,
  ServiceResponse,
  StatusCode,
  grpcCancel,
  grpcHTTP,
  mask,
  maskWrap,
  unwrap,
} from '../src';
import {
  whisk_api_user_v2_HealthGoal,
  whisk_api_user_v2_PersonalDetails,
  whisk_api_user_v2_UserAPI_GetMe,
  whisk_api_user_v2_UserAPI_UpdateSettings,
  whisk_api_user_v2_UserSettings,
} from './proto';

const goals = Object.values(whisk_api_user_v2_HealthGoal);
console.log(goals);

const logout = () => {
  //
};
const forbidden = () => {
  //
};

const TOKEN = '123';

(async () => {
  // Server config
  const grpc = grpcHTTP({
    server: 'https://example.com',
    credentials: true,
    debug: false,
    devtool: false,
    timeout: undefined,

    // Proxy xhr before request
    transformRequest: ({ xhr, data }) => {
      xhr.setRequestHeader('Authorization', TOKEN);
      return { ...data, x: 1 };
    },

    // Proxy result after request
    transformResponse: ({ data }) => {
      if (!data.success) {
        alert(`v1.Grpc.Event.GRPCError ${data.error.message ?? ''}`);

        if (data.error.httpStatus === 403) {
          forbidden();

          return { success: false, error: { message: '123' } };
        }

        if (data.error.grpcCode === StatusCode.UNAUTHENTICATED) {
          logout();
        }
      }
      return data;
    },
  }) as GRPCDeep;

  // Simple method call
  const user = await grpc(whisk_api_user_v2_UserAPI_GetMe);

  if (user.success) {
    console.log(user.data.user?.email);
  }

  // Cancel controller
  const cancel = grpcCancel();

  // Method call
  const result = await grpc(
    whisk_api_user_v2_UserAPI_UpdateSettings,
    // Not the best option
    maskWrap(
      { id: '', settings: { personalDetails: { ...Default(whisk_api_user_v2_PersonalDetails), age: 1 } } },
      'settings'
    ),
    { cancel, onDownload: e => console.log(e.loaded / e.total) }
  );

  if (result.success) {
    console.log(result.data.user?.id);
  }

  // Manual cancel
  cancel();

  // Manual types
  type request = ServiceRequest<whisk_api_user_v2_UserAPI_UpdateSettings>;
  type response = ServiceResponse<whisk_api_user_v2_UserAPI_UpdateSettings>;

  console.log({} as request | response);

  const res = await grpc(
    whisk_api_user_v2_UserAPI_UpdateSettings,
    {
      id: '',
      settings: {
        personalDetails: {
          ...Default(whisk_api_user_v2_PersonalDetails),
          age: 1,
          healthGoals: { list: [3, whisk_api_user_v2_HealthGoal.HEALTH_GOAL_BETTER_SLEEP] },
        },
      },
    },
    {
      mask: { field: 'settings' },
      cancel: `some-token-${123}`,
      onDownload: e => console.log(e.loaded / e.total),
      onUpload: e => console.log(e.loaded / e.total),
      timeout: 2000,
    }
  );

  const { data, error } = res;

  console.log(data?.user?.email);
  console.log(error?.httpStatus);

  console.log(res.success && res.data.user?.hasPassword);
  console.log(!res.success && res.error.message);

  if (res.success) {
    console.log(res.data.user?.hasPassword);
  } else {
    console.log(
      res.error.message, // string
      res.error.data, // unknown - make safe JSON.parse
      res.error.grpcCode, // number
      res.error.httpStatus // number
    );
  }

  // The correct option for masks
  const settings: whisk_api_user_v2_UserSettings = {
    personalDetails: { ...Default(whisk_api_user_v2_PersonalDetails), age: 1 },
  };

  const res2 = await grpc(whisk_api_user_v2_UserAPI_UpdateSettings, {
    id: '',
    settings,
    mask: mask(settings),
  });

  console.log(res2);

  const userEmail = await unwrap(
    grpc(whisk_api_user_v2_UserAPI_UpdateSettings, { id: 'abc' }),
    d => d.user?.email,
    e => {
      console.log(e);
      return 1000;
    }
  );

  console.log(userEmail);

  const userEmailStrict = await unwrap(
    grpc(whisk_api_user_v2_UserAPI_UpdateSettings, { id: 'abc' }),
    d => d.user?.email ?? 'Default',
    () => 'Nobody'
  );

  console.log(userEmailStrict);

  const userEmailShort = await unwrap(
    grpc(whisk_api_user_v2_UserAPI_UpdateSettings, { id: 'abc' }),
    d => d.user?.email ?? 'User'
  );

  console.log(userEmailShort);

  const userEmailError = await unwrap(
    grpc(whisk_api_user_v2_UserAPI_UpdateSettings, { id: 'abc' }),
    undefined,
    () => 'Nobody'
  );

  console.log(userEmailError);
})();
