/* eslint-disable id-blacklist */

import { Bytes, Fixed32, Fixed64, SHIFT_LEFT_32, Varint } from './constant';
import { read } from './ieee754';
import { readUtf8 } from './utf8';

export class BufRead {
  pos = 0;
  type = 0;
  path = '';
  len = 0;

  constructor(public buf: Uint8Array) {
    this.len = buf.length;
  }
}

export function skip(b: BufRead, val: number) {
  const type = val & 7;
  if (type === Varint) {
    while (b.buf[b.pos++] > 127) {}
  } else if (type === Bytes) {
    b.pos = uint32(b) + b.pos;
  } else if (type === Fixed32) {
    b.pos += 4;
  } else if (type === Fixed64) {
    b.pos += 8;
  } else if (type === 3) {
    let t: number;
    while ((t = uint32(b) & 7) !== 4) {
      skip(b, t);
    }
  } else {
    throw new Error(`Unimplemented type: ${type} in path "${b.path}"`);
  }
}

export function uint32(b: BufRead) {
  let value = SHIFT_LEFT_32 - 1;

  value = (b.buf[b.pos] & 127) >>> 0;
  if (b.buf[b.pos++] < 128) {
    return value;
  }
  value = (value | ((b.buf[b.pos] & 127) << 7)) >>> 0;
  if (b.buf[b.pos++] < 128) {
    return value;
  }
  value = (value | ((b.buf[b.pos] & 127) << 14)) >>> 0;
  if (b.buf[b.pos++] < 128) {
    return value;
  }
  value = (value | ((b.buf[b.pos] & 127) << 21)) >>> 0;
  if (b.buf[b.pos++] < 128) {
    return value;
  }
  value = (value | ((b.buf[b.pos] & 15) << 28)) >>> 0;

  if (b.buf[b.pos++] < 128) {
    return value;
  }

  if ((b.pos += 5) > b.len) {
    b.pos = b.len;
    throw outRange(b, 10);
  }

  return value;
}

function int32(b: BufRead) {
  return uint32(b) | 0;
}

function sint32(b: BufRead) {
  const value = uint32(b);
  return ((value >>> 1) ^ -(value & 1)) | 0;
}

function bool(b: BufRead) {
  return uint32(b) !== 0;
}

function readFixed32(b: BufRead, num: number) {
  return (b.buf[num - 4] | (b.buf[num - 3] << 8) | (b.buf[num - 2] << 16) | (b.buf[num - 1] << 24)) >>> 0;
}

function fixed32(b: BufRead) {
  if (b.pos + 4 > b.len) {
    throw outRange(b, 4);
  }

  return readFixed32(b, (b.pos += 4));
}

function sfixed32(b: BufRead) {
  if (b.pos + 4 > b.len) {
    throw outRange(b, 4);
  }

  return readFixed32(b, (b.pos += 4)) | 0;
}

function readFixed64(b: BufRead, sign: boolean) {
  if (b.pos + 8 > b.len) {
    throw outRange(b, 8);
  }

  return toNumber(readFixed32(b, (b.pos += 4)) >>> 0, readFixed32(b, (b.pos += 4) >>> 0), sign);
}

function fixed64(b: BufRead) {
  return readFixed64(b, true);
}

function sfixed64(b: BufRead) {
  return readFixed64(b, false);
}

function int64(b: BufRead) {
  const { lo, hi } = readLongVarint(b);
  return toNumber(lo, hi, false);
}

function uint64(b: BufRead) {
  const { lo, hi } = readLongVarint(b);
  return toNumber(lo, hi, true);
}

function sint64(b: BufRead) {
  let { lo, hi } = readLongVarint(b);
  ({ lo, hi } = zzDecode(lo, hi));
  return toNumber(lo, hi, false);
}

const float = (b: BufRead) => {
  if (b.pos + 4 > b.len) {
    throw outRange(b, 4);
  }

  const val = read(b.buf, b.pos, true, 23, 4);
  b.pos += 4;
  return val;
};

function double(b: BufRead) {
  if (b.pos + 8 > b.len) {
    throw outRange(b, 4);
  }

  const val = read(b.buf, b.pos, true, 52, 8);
  b.pos += 8;
  return val;
}

function string(b: BufRead) {
  const end = uint32(b) + b.pos;
  const pos = b.pos;
  b.pos = end;
  return readUtf8(b.buf, pos, end);
}

function bytes(b: BufRead) {
  const length = uint32(b);
  const end = length + b.pos;

  if (end > b.len) {
    throw outRange(b, length);
  }

  const buffer = b.buf.subarray(b.pos, end);
  b.pos = end;
  return buffer;
}

const packedEnd = (b: BufRead) => (b.type === Bytes ? uint32(b) + b.pos : b.pos + 1);

export function readPacked(fn: (b: BufRead, isSigned?: boolean) => unknown, b: BufRead) {
  if (b.type !== Bytes) {
    return [fn(b)];
  }
  const end = packedEnd(b);
  const arr = [];
  while (b.pos < end) {
    arr.push(fn(b));
  }
  return arr;
}

export const readMap = {
  string,
  float,
  double,
  bool,
  enum: uint32,
  uint32,
  uint64,
  int32,
  int64,
  sint32,
  sint64,
  fixed32,
  fixed64,
  sfixed32,
  sfixed64,
  bytes,
};

export type ReadMapKeys = keyof typeof readMap;

function outRange(b: BufRead, writeLength?: number) {
  return Error(`Out of range [${b.path}]: ${b.pos} + ${writeLength ?? 1} > ${b.len}`);
}

function toNumber(lo: number, hi: number, sign: boolean) {
  if (!sign && hi >>> 31) {
    lo = (~lo + 1) >>> 0;
    hi = ~hi >>> 0;
    if (!lo) {
      hi = (hi + 1) >>> 0;
    }
    return -(lo + hi * SHIFT_LEFT_32);
  }
  return lo + hi * SHIFT_LEFT_32;
}

function zzDecode(lo: number, hi: number) {
  const mask = -(lo & 1);
  lo = (((lo >>> 1) | (hi << 31)) ^ mask) >>> 0;
  hi = ((hi >>> 1) ^ mask) >>> 0;
  return { lo, hi };
}

function readLongVarint(b: BufRead) {
  let lo = 0;
  let hi = 0;
  let i = 0;

  if (b.len - b.pos > 4) {
    for (; i < 4; ++i) {
      lo = (lo | ((b.buf[b.pos] & 127) << (i * 7))) >>> 0;
      if (b.buf[b.pos++] < 128) {
        return { lo, hi };
      }
    }

    lo = (lo | ((b.buf[b.pos] & 127) << 28)) >>> 0;
    hi = (hi | ((b.buf[b.pos] & 127) >> 4)) >>> 0;
    if (b.buf[b.pos++] < 128) {
      return { lo, hi };
    }
    i = 0;
  } else {
    for (; i < 3; ++i) {
      if (b.pos >= b.len) {
        throw outRange(b);
      }
      lo = (lo | ((b.buf[b.pos] & 127) << (i * 7))) >>> 0;
      if (b.buf[b.pos++] < 128) {
        return { lo, hi };
      }
    }

    lo = (lo | ((b.buf[b.pos++] & 127) << (i * 7))) >>> 0;
    return { lo, hi };
  }
  if (b.len - b.pos > 4) {
    for (; i < 5; ++i) {
      hi = (hi | ((b.buf[b.pos] & 127) << (i * 7 + 3))) >>> 0;
      if (b.buf[b.pos++] < 128) {
        return { lo, hi };
      }
    }
  } else {
    for (; i < 5; ++i) {
      if (b.pos >= b.len) {
        throw outRange(b);
      }

      hi = (hi | ((b.buf[b.pos] & 127) << (i * 7 + 3))) >>> 0;
      if (b.buf[b.pos++] < 128) {
        return { lo, hi };
      }
    }
  }

  throw Error(`Invalid varint encoding in "${b.path}"`);
}
