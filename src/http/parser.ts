// tslint:disable: no-bitwise

import { isFunction } from '@whisklabs/typeguards';

import { HEADER_SIZE } from './utils';

function decodeASCII(input: Uint8Array): string {
  let str = '';
  // eslint-disable-next-line @typescript-eslint/prefer-for-of
  for (let i = 0; i < input.length; i++) {
    str += String.fromCharCode(input[i]);
  }

  return str;
}

const parseHttpHeaders = (str: string) => {
  const chunks = String(str ?? '')
    .trim()
    .split('\r\n');
  const headers: Record<string, string> = {};

  for (const chunk of chunks) {
    const pos = chunk.indexOf(':');
    headers[chunk.substring(0, pos).trim()] = chunk.substring(pos + 1).trim();
  }

  return headers;
};

const isTrailerHeader = (headerView: DataView) => (headerView.getUint8(0) & 0x80) === 0x80;

const readLengthFromHeader = (headerView: DataView) => headerView.getUint32(1, false);

const hasEnoughBytes = (buffer: Uint8Array, position: number, byteCount: number) =>
  buffer.byteLength - position >= byteCount;

function sliceUint8Array(buffer: Uint8Array, from: number, to?: number) {
  if (isFunction(buffer.slice)) {
    return buffer.slice(from, to);
  }

  let end = buffer.length;
  if (to !== undefined) {
    end = to;
  }

  const num = end - from;
  const array = new Uint8Array(num);
  let arrayIndex = 0;
  for (let i = from; i < end; i++) {
    array[arrayIndex++] = buffer[i];
  }
  return array;
}

export enum ChunkType {
  MESSAGE = 1,
  TRAILERS = 2,
}

export type Chunk =
  | {
      chunkType: ChunkType.MESSAGE;
      data: Uint8Array;
    }
  | {
      chunkType: ChunkType.TRAILERS;
      trailers: Record<string, string>;
    };

export function chunkParse(buffer: Uint8Array, flush?: boolean): Chunk[] {
  if (buffer.length === 0 && flush === true) {
    return [];
  }

  let position = 0;
  const chunkData: Chunk[] = [];

  while (true) {
    if (!hasEnoughBytes(buffer, position, HEADER_SIZE)) {
      return chunkData;
    }

    const headerBuffer = sliceUint8Array(buffer, position, position + HEADER_SIZE);

    const headerView = new DataView(headerBuffer.buffer, headerBuffer.byteOffset, headerBuffer.byteLength);

    const msgLength = readLengthFromHeader(headerView);

    if (!hasEnoughBytes(buffer, position, HEADER_SIZE + msgLength)) {
      return chunkData;
    }

    const messageData = sliceUint8Array(buffer, position + HEADER_SIZE, position + HEADER_SIZE + msgLength);

    position += HEADER_SIZE + msgLength;

    if (isTrailerHeader(headerView)) {
      chunkData.push({
        chunkType: ChunkType.TRAILERS,
        trailers: parseHttpHeaders(decodeASCII(messageData)),
      });
    } else {
      chunkData.push({ chunkType: ChunkType.MESSAGE, data: messageData });
    }
  }
}
