import { Bytes, Fixed32, Fixed64, SHIFT_RIGHT_32, Varint } from './constant';
import { write } from './ieee754';
import { writeUtf8 } from './utf8';

export class BufWrite {
  // buf = new Uint8Array();
  buf: number[] = [];

  // len = 0;

  push(item: number) {
    // if (this.buf.length < this.len + 2) {
    //   const b = new Uint8Array(this.len + 10);
    //   b.set(this.buf, 0);
    //   this.buf = b;
    // }
    // this.buf[this.len++] = item;

    this.buf.push(item);
  }

  concat(buf: number[]) {
    // const b = new Uint8Array(this.buf.length + buf.length + 10);
    // b.set(this.buf, 0);
    // b.set(buf, this.len);
    // this.buf = b;
    // this.len += buf.length;

    for (let i = 0, l = buf.length; i < l; i++) {
      this.buf.push(buf[i]);
    }
  }

  get() {
    // return this.buf.slice(0, this.len); // -> dataview

    const u = new Uint8Array(this.buf.length);
    u.set(this.buf);
    return u;
  }
}

export const writeTag = (buf: BufWrite, tag: number, type: number) => {
  writeVarint(buf, (tag << 3) | type);
};

export const writeVarint = (buf: BufWrite, val: number, s = false): void => {
  if (val > 0xfffffff || val < 0 || s) {
    return writeBigVarint(buf, val, s);
  }

  while (val > 127) {
    buf.push((val & 127) | 128);
    val >>>= 7;
  }

  buf.push(val);
};

const writeBigVarint = (buf: BufWrite, val: number, s: boolean): void => {
  let low: number;
  let high: number;

  const sign = val < 0;

  if (sign) {
    val = -val;
  }

  low = val >>> 0;
  high = ((val - low) / 4294967296) >>> 0;

  if (sign) {
    high = ~high >>> 0;
    low = ~low >>> 0;
    if (++low > 4294967295) {
      low = 0;
      if (++high > 4294967295) {
        high = 0;
      }
    }
  }

  if (s) {
    const mask = high >> 31;
    high = (((high << 1) | (low >>> 31)) ^ mask) >>> 0;
    low = ((low << 1) ^ mask) >>> 0;
  }

  while (high) {
    buf.push((low & 127) | 128);
    low = ((low >>> 7) | (high << 25)) >>> 0;
    high >>>= 7;
  }

  while (low > 127) {
    buf.push((low & 127) | 128);
    low = low >>> 7;
  }

  buf.push(low);
};

function writeInt32(buf: BufWrite, val: number) {
  buf.push(val);
  buf.push(val >>> 8);
  buf.push(val >>> 16);
  buf.push(val >>> 24);
}

const writeFixed32 = writeInt32;

const writeSFixed32 = writeInt32;

const writeFixed64 = (buf: BufWrite, val: number) => {
  writeInt32(buf, val & -1);
  writeInt32(buf, Math.floor(val * SHIFT_RIGHT_32));
};

const writeSFixed64 = writeFixed64;

const writeSVarint = (buf: BufWrite, val: number) => {
  writeVarint(buf, val, true);
};

const writeBoolean = (buf: BufWrite, val: boolean) => {
  writeVarint(buf, Number(Boolean(val)));
};

const writeString = (buf: BufWrite, str: string) => {
  const bufStr = writeUtf8(String(str));
  writeVarint(buf, bufStr.length);
  buf.concat(bufStr);
};

const writeFloat = (buf: BufWrite, val: number) => {
  write(buf.buf, val, buf.buf.length, true, 23, 4);
};

const writeDouble = (buf: BufWrite, val: number) => {
  write(buf.buf, val, buf.buf.length, true, 52, 8);
};

const writeBytes = (buf: BufWrite, buffer: Buffer) => {
  const len = buffer.length;
  writeVarint(buf, len);

  // eslint-disable-next-line @typescript-eslint/prefer-for-of
  for (let i = 0; i < buffer.length; i++) {
    buf.push(buffer[i]);
  }
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const writePacked = <T>(fn: (buf: BufWrite, val: any) => void, buf: BufWrite, tag: number, arr: T[]) => {
  if (arr.length) {
    writeTag(buf, tag, Bytes);

    const bufRaw = new BufWrite();
    for (const ar of arr) {
      fn(bufRaw, ar);
    }

    writeVarint(buf, bufRaw.buf.length);
    buf.concat(bufRaw.buf);
  }
};

const writeBytesField = (buf: BufWrite, tag: number, buffer: Buffer) => {
  writeTag(buf, tag, Bytes);
  writeBytes(buf, buffer);
};

const writeFixed32Field = (buf: BufWrite, tag: number, val: number) => {
  writeTag(buf, tag, Fixed32);
  writeFixed32(buf, val);
};

const writeSFixed32Field = (buf: BufWrite, tag: number, val: number) => {
  writeTag(buf, tag, Fixed32);
  writeSFixed32(buf, val);
};

const writeFixed64Field = (buf: BufWrite, tag: number, val: number) => {
  writeTag(buf, tag, Fixed64);
  writeFixed64(buf, val);
};

const writeSFixed64Field = (buf: BufWrite, tag: number, val: number) => {
  writeTag(buf, tag, Fixed64);
  writeSFixed64(buf, val);
};

const writeVarintField = (buf: BufWrite, tag: number, val: number) => {
  writeTag(buf, tag, Varint);
  writeVarint(buf, val);
};

const writeSVarintField = (buf: BufWrite, tag: number, val: number) => {
  writeTag(buf, tag, Varint);
  writeSVarint(buf, val);
};

const writeStringField = (buf: BufWrite, tag: number, str: string) => {
  writeTag(buf, tag, Bytes);
  writeString(buf, str);
};

const writeFloatField = (buf: BufWrite, tag: number, val: number) => {
  writeTag(buf, tag, Fixed32);
  writeFloat(buf, val);
};

const writeDoubleField = (buf: BufWrite, tag: number, val: number) => {
  writeTag(buf, tag, Fixed64);
  writeDouble(buf, val);
};

const writeBooleanField = (buf: BufWrite, tag: number, val: boolean) => {
  writeVarintField(buf, tag, Number(val));
};

export const writeMapRaw = {
  // eslint-disable-next-line id-blacklist
  string: writeString,
  float: writeFloat,
  double: writeDouble,
  bool: writeBoolean,
  enum: writeVarint,
  uint32: writeVarint,
  uint64: writeVarint,
  int32: writeVarint,
  int64: writeVarint,
  sint32: writeSVarint,
  sint64: writeSVarint,
  fixed32: writeFixed32,
  fixed64: writeFixed64,
  sfixed32: writeSFixed32,
  sfixed64: writeSFixed64,
  bytes: writeBytes,
};

export type WriteMapRawKeys = keyof typeof writeMapRaw;

export const writeMap = {
  // eslint-disable-next-line id-blacklist
  string: writeStringField,
  float: writeFloatField,
  double: writeDoubleField,
  bool: writeBooleanField,
  enum: writeVarintField,
  uint32: writeVarintField,
  uint64: writeVarintField,
  int32: writeVarintField,
  int64: writeVarintField,
  sint32: writeSVarintField,
  sint64: writeSVarintField,
  fixed32: writeFixed32Field,
  fixed64: writeFixed64Field,
  sfixed32: writeSFixed32Field,
  sfixed64: writeSFixed64Field,
  bytes: writeBytesField,
};

export type WriteMapKeys = keyof typeof writeMap;
