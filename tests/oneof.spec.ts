/* eslint-disable camelcase */

import { Decode, Encode, oneis, oneof } from '../src';
import { whisk_api_user_v2_TestEmpty, whisk_api_user_v2_TestOneof } from './proto';
import { whisk } from './protobufjs/out';

describe('protobuf wrapper', () => {
  const data: whisk_api_user_v2_TestOneof = {
    id: '123',
    device: {
      oneof: 'customDevice',
      value: 'abc',
    },
  };

  it('oneof', () => {
    expect(oneof()).toBe(undefined);
    expect(oneof(data.device)).toBe('abc');
  });

  it('oneof with key', () => {
    expect(oneof(data.device, 'customDevice')).toBe('abc');
    expect(oneof(data.device, 'deviceType')).toBe(undefined);
  });

  it('oneof with fn', () => {
    expect(oneof(data.device, 'customDevice', v => `${v}a`)).toBe('abca');
    expect(oneof(data.device, 'deviceType', v => v * 3)).toBe(undefined);
  });

  it('oneis', () => {
    expect(oneis()).toBe(false);
    expect(oneis(data.device)).toBe(false);
    expect(oneis(data.device, 'customDevice')).toBe(true);
    expect(oneis(data.device, 'deviceType')).toBe(false);
  });

  it('encode/decode', () => {
    const dataB = {
      id: '123',
      device: 'customDevice',
      customDevice: 'abc',
    };

    const binA = Encode(whisk_api_user_v2_TestOneof, data);
    const binB = whisk.api.user.v2.TestOneof.encode(dataB).finish();

    expect(Array.from(binA)).toMatchObject(Array.from(binB));
    expect(Decode(whisk_api_user_v2_TestOneof, binA)).toMatchObject(data);
    expect(whisk.api.user.v2.TestOneof.decode(binB)).toMatchObject(dataB);
  });

  it('encode/decode', () => {
    const dataX: whisk_api_user_v2_TestEmpty = {
      id: '1',
      itemNameLong: {
        oneof: 'global',
        value: {},
      },
    };

    const dataY = {
      id: '1',
      itemNameLong: 'global',
      global: {},
    };

    const binA = Encode(whisk_api_user_v2_TestEmpty, dataX);
    const binB = whisk.api.user.v2.TestEmpty.encode(dataY).finish();

    expect(Array.from(binA)).toMatchObject(Array.from(binB));
    expect(Decode(whisk_api_user_v2_TestEmpty, binA)).toEqual(dataX);
    expect(whisk.api.user.v2.TestEmpty.decode(binB)).toEqual({
      id: '1',
      global: {},
    });
  });
});
