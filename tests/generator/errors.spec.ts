/* eslint-disable max-len */
/* eslint-disable no-console */

import { join } from 'path';

import { generator } from '../../src/generator';

describe('generator', () => {
  it('duplicates', async () => {
    console.error = jest.fn();

    const rusult = await generator({
      dir: join(__dirname, 'proto'),
      out: join(__dirname, 'result'),
    });

    expect(rusult).toEqual(true);

    const result = (console.error as jest.Mock<string, string[]>).mock.calls.reduce((item, out) => {
      item.forEach(i => out.push(i));
      return out;
    }, [] as string[]);

    expect(result).toMatchObject([
      '\x1b[31mNo found message or enum:\x1b[0m whisk_api_shared_v1_B_C [in "whisk_api_shared_v1_Z" field "item3 = 3"]',
      '\x1b[31mNo found message or enum:\x1b[0m whisk_api_shared_v1_Zero [in "whisk_api_shared_v1_Z" field "item_absolute = 5"]',
      '\x1b[31mNo found message or enum:\x1b[0m whisk_api_shared_v1_GetMeResponse [whisk_api_shared_v1_UserAPI_Get]',
      '\x1b[31mNo found message or enum:\x1b[0m google_protobuf_Empty [whisk_api_shared_v1_UserAPI_Get]',
      '\x1b[31mNo found message or enum:\x1b[0m whisk_api_shared_v1_GetMeResponse [whisk_api_shared_v1_UserAPI_Get]',
      '\x1b[31mNo found message or enum:\x1b[0m google_protobuf_Empty [whisk_api_shared_v1_UserAPI_Get]',
      '\x1b[31mNo found message or enum:\x1b[0m whisk_api_shared_v1_B_E [in "whisk_api_shared_v1_A" field "item5 = 5"]',
      '\x1b[31mIncorrect google wrapper google.protobuf.DoubleValue:\x1b[0m text [string, 2]',
      '\x1b[31mFound dublicate name:\x1b[0m item [whisk.api.shared.v1.A.item]',
      '\x1b[31mFound dublicate id:\x1b[0m 1 [whisk.api.shared.v1.A.item2]',
      '\x1b[31mFound dublicate key:\x1b[0m whisk_api_shared_v1_UserAPI_Get [whisk.api.shared.v1.UserAPI.Get]',
      '\x1b[31mFound dublicate key:\x1b[0m whisk_api_shared_v1_A [whisk.api.shared.v1.A]',
      '\x1b[31mFound dublicate key:\x1b[0m whisk_api_shared_v1_A_Unit [whisk_api_shared_v1_A_Unit.Unit]',
    ]);
  });
});
