const PERF_LIMIT = 50; // TextDecoder slow readUtf8JS on small string and faster on big string
const utf8TextDecoder = typeof TextDecoder === 'undefined' ? null : new TextDecoder('utf-8');

// 4-10 times slower!
// const utf8TextEncoder = typeof TextEncoder === 'undefined' ? null : new TextEncoder();

// eslint-disable-next-line complexity
const readUtf8JS = (buf: Uint8Array, pos: number, end: number) => {
  let str = '';
  let i = pos;
  let b0: number;
  let b1: number;
  let b2: number;
  let b3: number;
  let c: number | null;
  let bytesPerSequence: number;

  while (i < end) {
    b0 = buf[i];
    c = null; // codepoint
    bytesPerSequence = b0 > 0xef ? 4 : b0 > 0xdf ? 3 : b0 > 0xbf ? 2 : 1;

    if (i + bytesPerSequence > end) {
      break;
    }

    if (bytesPerSequence === 1) {
      if (b0 < 0x80) {
        c = b0;
      }
    } else if (bytesPerSequence === 2) {
      b1 = buf[i + 1];
      if ((b1 & 0xc0) === 0x80) {
        c = ((b0 & 0x1f) << 0x6) | (b1 & 0x3f);
        if (c <= 0x7f) {
          c = null;
        }
      }
    } else if (bytesPerSequence === 3) {
      b1 = buf[i + 1];
      b2 = buf[i + 2];
      if ((b1 & 0xc0) === 0x80 && (b2 & 0xc0) === 0x80) {
        c = ((b0 & 0xf) << 0xc) | ((b1 & 0x3f) << 0x6) | (b2 & 0x3f);
        if (c <= 0x7ff || (c >= 0xd800 && c <= 0xdfff)) {
          c = null;
        }
      }
    } else if (bytesPerSequence === 4) {
      b1 = buf[i + 1];
      b2 = buf[i + 2];
      b3 = buf[i + 3];
      if ((b1 & 0xc0) === 0x80 && (b2 & 0xc0) === 0x80 && (b3 & 0xc0) === 0x80) {
        c = ((b0 & 0xf) << 0x12) | ((b1 & 0x3f) << 0xc) | ((b2 & 0x3f) << 0x6) | (b3 & 0x3f);
        if (c <= 0xffff || c >= 0x110000) {
          c = null;
        }
      }
    }

    if (c === null) {
      c = 0xfffd;
      bytesPerSequence = 1;
    } else if (c > 0xffff) {
      c -= 0x10000;
      str += String.fromCharCode(((c >>> 10) & 0x3ff) | 0xd800);
      c = 0xdc00 | (c & 0x3ff);
    }

    str += String.fromCharCode(c);
    i += bytesPerSequence;
  }

  return str;
};

export const readUtf8 = utf8TextDecoder
  ? (buf: Uint8Array, pos: number, end: number) =>
      end - pos >= PERF_LIMIT ? utf8TextDecoder.decode(buf.subarray(pos, end)) : readUtf8JS(buf, pos, end)
  : readUtf8JS;

export const writeUtf8 = (str: string, buf: number[] = []) => {
  for (let i = 0, c: number, lead: undefined | number | null; i < str.length; i++) {
    c = str.charCodeAt(i); // code point

    if (c > 0xd7ff && c < 0xe000) {
      // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
      if (lead) {
        if (c < 0xdc00) {
          buf.push(0xef, 0xbf, 0xbd);
          lead = c;
          continue;
        } else {
          c = ((lead - 0xd800) << 10) | (c - 0xdc00) | 0x10000;
          lead = null;
        }
      } else {
        if (c > 0xdbff || i + 1 === str.length) {
          buf.push(0xef, 0xbf, 0xbd);
        } else {
          lead = c;
        }
        continue;
      }
      // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    } else if (lead) {
      buf.push(0xef, 0xbf, 0xbd);
      lead = null;
    }

    if (c < 0x80) {
      buf.push(c);
    } else {
      if (c < 0x800) {
        buf.push((c >> 0x6) | 0xc0);
      } else {
        if (c < 0x10000) {
          buf.push((c >> 0xc) | 0xe0);
        } else {
          buf.push((c >> 0x12) | 0xf0, ((c >> 0xc) & 0x3f) | 0x80);
        }
        buf.push(((c >> 0x6) & 0x3f) | 0x80);
      }
      buf.push((c & 0x3f) | 0x80);
    }
  }
  return buf;
};
