import { isPresent, isText } from '@whisklabs/typeguards';

// eslint-disable-next-line complexity
export function getDefault(type: string, value?: unknown) {
  switch (type) {
    case 'float':
    case 'double':
      return isPresent(value) ? parseFloat(value as string) : 0;
    case 'enum':
    case 'uint32':
    case 'uint64':
    case 'int32':
    case 'int64':
    case 'sint32':
    case 'sint64':
    case 'fixed32':
    case 'fixed64':
    case 'sfixed32':
    case 'sfixed64':
      return isPresent(value) ? parseInt(value as string, 10) : 0;
    case 'string':
      return isText(value) ? String(value) : '';
    case 'bool':
      return value === true;
    case 'bytes':
      return value ?? new Uint8Array();
    default:
  }
}
