/* eslint-disable camelcase */

// protobufjs can't disable long and --force-number don't work
// https://github.com/protobufjs/protobuf.js/issues/1109
import { configure, util } from 'protobufjs';
// @ts-expect-error Explicitly disable long.js support
util.Long = undefined;
configure();

import { Decode, Encode } from '../src';

import {
  whisk_api_shared_v1_Big,
  whisk_api_shared_v1_Primitive,
  whisk_api_shared_v1_Sign,
  whisk_api_shared_v1_Wrapper,
} from './proto';
import { whisk } from './protobufjs/out';

describe('types', () => {
  it('primitive', () => {
    const primitive: whisk_api_shared_v1_Primitive = {
      bool: true,
      bytes: new Uint8Array([1, 2, 3]),
      double: 2934928364.612846,
      fixed32: 2606279258,
      fixed64: 9953233078052717000,
      float: 9.978899955749512,
      int32: 16868,
      int64: 2343919238923492000,
      sfixed32: -23452345,
      sfixed64: -34523452451234,
      sint32: -765,
      sint64: -3452442345345,
      // eslint-disable-next-line id-blacklist
      string: 'Ww erfwer 2w4gf -У%№:,И№ %:"МwsF\nVAE4f245✆ ы:,s ыяыа кнлуькедлБЫВюмыК?rfrvaEF 245g werva gw5g45🦁',
      uint32: 34534534,
      uint64: 2348572934586240000,
    };

    const primitiveJS = {
      bool: true,
      bytes: { 0: 1, 1: 2, 2: 3 },
      double: 2934928364.612846,
      fixed32: 2606279258,
      fixed64: 9953233078052717000,
      float: 9.978899955749512,
      int32: 16868,
      int64: 2343919238923492000,
      sfixed32: -23452345,
      sfixed64: -34523452451234,
      sint32: -765,
      sint64: -3452442345345,
      // eslint-disable-next-line id-blacklist
      string: 'Ww erfwer 2w4gf -У%№:,И№ %:"МwsF\nVAE4f245✆ ы:,s ыяыа кнлуькедлБЫВюмыК?rfrvaEF 245g werva gw5g45🦁',
      uint32: 34534534,
      uint64: 2348572934586240000,
    };

    const binA = Encode(whisk_api_shared_v1_Primitive, primitive);
    const binB = whisk.api.shared.v1.Primitive.encode(primitive).finish();

    expect(Array.from(binA)).toMatchObject(Array.from(binB));

    expect(whisk.api.shared.v1.Primitive.decode(binB)).toMatchObject(primitiveJS);
    expect(Decode(whisk_api_shared_v1_Primitive, binA)).toMatchObject(primitive);
  });

  // eslint-disable-next-line @typescript-eslint/no-loss-of-precision
  const nums = [2684354560, 26843545650, 2684354560234, 1241234241234234, 252413425324514232, 1844674407370951000];

  for (const num of nums) {
    it(`int64: ${num}`, () => {
      const b: whisk_api_shared_v1_Big = { b: num };

      const binA = Encode(whisk_api_shared_v1_Big, b);
      const binB = whisk.api.shared.v1.Big.encode(b).finish();

      expect(Array.from(binA)).toMatchObject(Array.from(binB));

      expect(whisk.api.shared.v1.Big.decode(binB)).toMatchObject(b);
      expect(Decode(whisk_api_shared_v1_Big, binA)).toMatchObject(b);
    });
  }

  const sign = [
    [1, 1024, 16868],
    [-1, -1024, -16868],
    [12312123, 536870937, -12312123, -536870937],
    [
      1342177280, 13421772825, 1342177280117, 620617120617117, 126206712662257120, 2343919238923492000,
      9223372036854761000, -1342177280, -13421772825, -1342177280117, -620617120617117, -26206712662257110,
      -123372036854751000, -2343919238923492000,
    ],
  ];

  for (const num of sign[0]) {
    it(`signSmall: ${num}`, () => {
      const b: whisk_api_shared_v1_Sign = {
        fixed32: num,
      };

      const binA = Encode(whisk_api_shared_v1_Sign, b);
      const binB = whisk.api.shared.v1.Sign.encode(b).finish();

      expect(Array.from(binA)).toMatchObject(Array.from(binB));

      expect(whisk.api.shared.v1.Sign.decode(binB)).toMatchObject(b);
      expect(Decode(whisk_api_shared_v1_Sign, binA)).toMatchObject(b);
    });
  }

  for (const num of sign[0].concat(sign[1], sign[2])) {
    it(`signMedium: ${num}`, () => {
      const b: whisk_api_shared_v1_Sign = {
        int32: num,
        sint32: num,
        sfixed32: num,
      };

      const binA = Encode(whisk_api_shared_v1_Sign, b);
      const binB = whisk.api.shared.v1.Sign.encode(b).finish();

      expect(Array.from(binA)).toMatchObject(Array.from(binB));

      expect(whisk.api.shared.v1.Sign.decode(binB)).toMatchObject(b);
      expect(Decode(whisk_api_shared_v1_Sign, binA)).toMatchObject(b);
    });
  }

  for (const num of sign[0].concat(sign[1], sign[2], sign[3])) {
    it(`signLarge: ${num}`, () => {
      const b: whisk_api_shared_v1_Sign = {
        int64: num,
        sint64: num,
      };

      const binA = Encode(whisk_api_shared_v1_Sign, b);
      const binB = whisk.api.shared.v1.Sign.encode(b).finish();

      expect(Array.from(binA)).toMatchObject(Array.from(binB));

      expect(whisk.api.shared.v1.Sign.decode(binB)).toMatchObject(b);
      expect(Decode(whisk_api_shared_v1_Sign, binA)).toMatchObject(b);
    });
  }

  it('wrapper', () => {
    const primitive: whisk_api_shared_v1_Wrapper = {
      bool: true,
      bytes: new Uint8Array([1, 2, 3]),
      double: 2934928364.612846,
      float: 9.978899955749512,
      int32: -16868,
      int64: 2343919238923492000,
      // eslint-disable-next-line id-blacklist
      string: 'Ww erfwer 2w4gf -У%№:,И№ %:"МwsF\nVAE4f245✆ ы:,s ыяыа кнлуькедлБЫВюмыК?rfrvaEF 245g werva gw5g45🦁',
      uint32: 34534534,
      uint64: 2348572934586240000,
    };

    // protobufjs can't disable long and --force-number don't work
    // https://github.com/protobufjs/protobuf.js/issues/1109
    const primitivePJS: whisk.api.shared.v1.Wrapper = {
      bool: { value: true },
      bytes: { value: new Uint8Array([1, 2, 3]) },
      double: { value: 2934928364.612846 },
      float: { value: 9.978899955749512 },
      int32: { value: -16868 },
      int64: { value: 2343919238923492000 },
      // eslint-disable-next-line id-blacklist
      string: {
        value: 'Ww erfwer 2w4gf -У%№:,И№ %:"МwsF\nVAE4f245✆ ы:,s ыяыа кнлуькедлБЫВюмыК?rfrvaEF 245g werva gw5g45🦁',
      },
      uint32: { value: 34534534 },
      uint64: { value: 2348572934586240000 },
    };

    const primitivePJSOut = {
      bool: { value: true },
      bytes: {
        value: {
          0: 1,
          1: 2,
          2: 3,
        },
      },
      double: { value: 2934928364.612846 },
      float: { value: 9.978899955749512 },
      int32: { value: -16868 },
      int64: {
        value: 2343919238923492000,
      },
      // eslint-disable-next-line id-blacklist
      string: {
        value: 'Ww erfwer 2w4gf -У%№:,И№ %:"МwsF\nVAE4f245✆ ы:,s ыяыа кнлуькедлБЫВюмыК?rfrvaEF 245g werva gw5g45🦁',
      },
      uint32: { value: 34534534 },
      uint64: {
        value: 2348572934586240000,
      },
    };

    const binA = Encode(whisk_api_shared_v1_Wrapper, primitive);
    const binB = whisk.api.shared.v1.Wrapper.encode(primitivePJS).finish();

    expect(Array.from(binA)).toMatchObject(Array.from(binB));

    expect(whisk.api.shared.v1.Wrapper.decode(binB)).toMatchObject(primitivePJSOut);
    expect(Decode(whisk_api_shared_v1_Wrapper, binA)).toMatchObject(primitive);
  });
});
