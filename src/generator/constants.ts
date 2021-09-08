export const TYPES: Record<string, string> = {
  double: 'number', // bigint?
  float: 'number',
  int32: 'number',
  int64: 'number',
  uint32: 'number',
  uint64: 'number',
  sint32: 'number',
  sint64: 'number',
  fixed32: 'number',
  fixed64: 'number',
  sfixed32: 'number',
  sfixed64: 'number',
  enum: 'number',
  bool: 'boolean',
  // eslint-disable-next-line id-blacklist
  string: 'string',
  bytes: 'Uint8Array',
};

export const GOOGLE_WRAPPERS: Record<string, string> = {
  'google.protobuf.DoubleValue': 'double',
  'google.protobuf.FloatValue': 'float',
  'google.protobuf.Int64Value': 'int64',
  'google.protobuf.UInt64Value': 'uint64',
  'google.protobuf.Int32Value': 'int32',
  'google.protobuf.UInt32Value': 'uint32',
  'google.protobuf.BoolValue': 'bool',
  'google.protobuf.StringValue': 'string',
  'google.protobuf.BytesValue': 'bytes',
};

export const OPTION_MESSAGES_REQUIRED = 'messages_required';
export const OPTION_MESSAGE_REQUIRED = 'message_required';
