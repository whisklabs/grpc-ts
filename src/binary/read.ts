import { Bytes, Fixed32, Fixed64, SHIFT_LEFT_32, Varint } from './constant';
import { read } from './ieee754';
import { readUtf8 } from './utf8';

export class BufRead {
  pos = 0;
  type = 0;

  constructor(public buf: Uint8Array) {}
}

export const skip = (b: BufRead, val: number) => {
  const type = val & 7;
  if (type === Varint) {
    while (b.buf[b.pos++] > 127) {}
  } else if (type === Bytes) {
    b.pos = readVarint(b) + b.pos;
  } else if (type === Fixed32) {
    b.pos += 4;
  } else if (type === Fixed64) {
    b.pos += 8;
  } else {
    throw new Error(`Unimplemented type: ${type}`);
  }
};

export const readVarint = (b: BufRead, s = false) => toNum(readVarintInner(b), s);

const readVarintInner = (b: BufRead) => {
  let low = 0;
  let bb: number;

  for (let i = 0; i < 4; i++) {
    bb = b.buf[b.pos++];
    low |= (bb & 127) << (i * 7);
    if (bb < 128) {
      return [low, 0];
    }
  }

  bb = b.buf[b.pos];
  low |= (bb & 15) << 28;

  return readVarintRemainder(low, b);
};

function readVarintRemainder(low: number, b: BufRead) {
  let high: number;
  let bb: number;

  bb = b.buf[b.pos++];
  high = (bb & 0x70) >> 4;
  if (bb < 128) {
    return [low, high];
  }
  bb = b.buf[b.pos++];
  high |= (bb & 127) << 3;
  if (bb < 128) {
    return [low, high];
  }
  bb = b.buf[b.pos++];
  high |= (bb & 127) << 10;
  if (bb < 128) {
    return [low, high];
  }
  bb = b.buf[b.pos++];
  high |= (bb & 127) << 17;
  if (bb < 128) {
    return [low, high];
  }
  bb = b.buf[b.pos++];
  high |= (bb & 127) << 24;
  if (bb < 128) {
    return [low, high];
  }
  bb = b.buf[b.pos++];
  high |= (bb & 0x01) << 31;
  if (bb < 128) {
    return [low, high];
  }

  throw new Error('Expected varint not more than 10 bytes');
}

const toNum = ([low, high]: number[], s: boolean) => {
  if (s) {
    const mask = -(low & 1);
    low = (((low >>> 1) | (high << 31)) ^ mask) >>> 0;
    high = ((high >>> 1) ^ mask) >>> 0;

    if (high >>> 31 !== 0) {
      const lo = (~low + 1) >>> 0;
      let hi = ~high >>> 0;
      if (lo === 0) {
        hi = (hi + 1) >>> 0;
      }
      return -(lo + hi * 4294967296);
    }
  }

  return high ? (low >>> 0) + (high >>> 0) * 4294967296 : low >>> 0;
};

const readPackedEnd = (b: BufRead) => (b.type === Bytes ? readVarint(b) + b.pos : b.pos + 1);

const readInt32 = (b: BufRead) =>
  (b.buf[b.pos++] | (b.buf[b.pos++] << 8) | (b.buf[b.pos++] << 16)) + (b.buf[b.pos++] << 24);

const readUInt32 = (b: BufRead) =>
  (b.buf[b.pos++] | (b.buf[b.pos++] << 8) | (b.buf[b.pos++] << 16)) + b.buf[b.pos++] * 0x1000000;

const readFixed32 = readUInt32;

const readSFixed32 = readInt32;

const readFixed64 = (b: BufRead) => readUInt32(b) + readUInt32(b) * SHIFT_LEFT_32;

const readSFixed64 = (b: BufRead) => readUInt32(b) + readInt32(b) * SHIFT_LEFT_32;

const readFloat = (b: BufRead) => {
  const val = read(b.buf, b.pos, true, 23, 4);
  b.pos += 4;
  return val;
};

const readDouble = (b: BufRead) => {
  const val = read(b.buf, b.pos, true, 52, 8);
  b.pos += 8;
  return val;
};

const readSVarint = (b: BufRead) => readVarint(b, true);

const readBoolean = (b: BufRead) => Boolean(readVarint(b));

const readString = (b: BufRead) => {
  const end = readVarint(b) + b.pos;
  const pos = b.pos;
  b.pos = end;
  return readUtf8(b.buf, pos, end);
};

const readBytes = (b: BufRead) => {
  const end = readVarint(b) + b.pos;
  const buffer = b.buf.subarray(b.pos, end);
  b.pos = end;
  return buffer;
};

export const readPacked = (fn: (b: BufRead, isSigned?: boolean) => unknown, b: BufRead) => {
  if (b.type !== Bytes) {
    return [fn(b)];
  }
  const end = readPackedEnd(b);
  const arr = [];
  while (b.pos < end) {
    arr.push(fn(b));
  }
  return arr;
};

export const readMap = {
  // eslint-disable-next-line id-blacklist
  string: readString,
  float: readFloat,
  double: readDouble,
  bool: readBoolean,
  enum: readVarint,
  uint32: readVarint,
  uint64: readVarint,
  int32: readVarint,
  int64: readVarint,
  sint32: readSVarint,
  sint64: readSVarint,
  fixed32: readFixed32,
  fixed64: readFixed64,
  sfixed32: readSFixed32,
  sfixed64: readSFixed64,
  bytes: readBytes,
};

export type ReadMapKeys = keyof typeof readMap;
