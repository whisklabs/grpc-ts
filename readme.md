<!-- TOC -->

- [Protobuf generator and GRPC](#protobuf-generator-and-grpc)
  - [Description](#description)
  - [Comparison](#comparison)
  - [Install](#install)
  - [Generator](#generator)
    - [API](#api)
    - [CLI](#cli)
    - [Parser](#parser)
  - [GRPC](#grpc)
    - [Setup gRPC instance](#setup-grpc-instance)
    - [Sending requests](#sending-requests)
      - [Simple example](#simple-example)
      - [Cancel requests](#cancel-requests)
      - [Mask](#mask)
      - [All options](#all-options)
      - [Web Tools](#web-tools)
    - [Extraction types](#extraction-types)
    - [Deep readonly](#deep-readonly)
    - [Default values](#default-values)
    - [Unwrap and mapping data](#unwrap-and-mapping-data)
  - [Messages and typings](#messages-and-typings)
    - [Primitives](#primitives)
    - [Wrappers](#wrappers)
    - [Messages](#messages)
    - [Enums](#enums)
    - [Services](#services)
    - [Oneof](#oneof)
    - [Required and Optional](#required-and-optional)
    - [Deprecated](#deprecated)
    - [Defaults](#defaults)

<!-- /TOC -->

<!-- https://marketplace.visualstudio.com/items?itemName=xavierguarch.auto-markdown-toc -->

# Protobuf generator and GRPC

## Description

Protobuf version 3 is used to work with the backend:
<https://developers.google.com/protocol-buffers/docs/proto3>

Messages are sent in binary form and do not contain message structures.

This library was created for simple convenient work with the protocol.

It consists of 2 parts:

- **generator** - converts `proto` files into TS code
- **query library** - uses the result of the generator to send and receive requests

## Comparison

| Features                            |        Google        |    Protobufjs    |       pbf       |        Current lib        |
| :---------------------------------- | :------------------: | :--------------: | :-------------: | :-----------------------: |
| Official client                     |          +           |        -         |        -        |             -             |
| Simple install                      |      - (binary)      |   + (full js)    |   + (full js)   |        + (full js)        |
| Data as simple object               |          -           |        +         |        +        |             +             |
| Compile simples proto with imports  |          +           |        +         |        -        |             +             |
| GRPC client                         |          +           | - (poor wrapper) |    - (none)     |             +             |
| Small client size (kb gzip)         | - (50 binary + http) |  + (6.8 binary)  | + (3.3 binary ) | + (3.3 binary + 3.0 HTTP) |
| Tree Shaking (lib + generated code) |          -           |        -         |        -        |             +             |
| Dev tools (JSON)                    |          +           |        -         |        -        |             +             |
| Dev tools (binary)                  |          -           |        -         |        -        |             +             |
| Auto wrap `StringValue`             |          -           |        -         |        -        |             +             |
| Auto wrap `oneof`                   |      - (manual)      |    - (manual)    |    - (none)     |             +             |
| Auto wrap `masks`                   |          -           |        -         |        -        |             +             |

## Install

```bash
npm i @whisklabs/grpc
```

## Generator

Before using the library, you need to convert the proto files to the required format.

### API

The conversion can be done programmatically.

```ts
import { generator } from '@whisklabs/grpc/generator';

const error = await generator({
  dir: 'source/folder', // path to root of proto folder
  out: 'result/folder', // output path for generated result
  version: '№123', // optional string for version
  exclude: /some|regexp/, // optional regexp for exclude files
  debug: true, // generate json debug files,
  // If we need package.json, set options packageName and packageVersion
  packageName: '@whisklabs/package-one', // generate package.json with name
  packageVersion: '0.1.10', // generate package.json with version
  packageUrl: 'git@github.com:whisklabs/npm.git', // set package url
  packageRegistry: 'https://npm.pkg.github.com/', // set package registry
});

console.log(error); // true | false
```

### CLI

The conversion can be done via the command line.

```bash
PROTO_DIR=source/folder PROTO_OUT=result/folder grpc-generator
```

```bash
export PROTO_DIR=source/folder
export PROTO_OUT=result/folder

npx @whisklabs/grpc
```

Required ENV params:

- `PROTO_DIR` - path to root of proto folder
- `PROTO_OUT` - output path for generated result
- `PROTO_VERSION` - string of version (default is from npm package lib)
- `PROTO_EXCLUDE` - optional regexp for exclude files
- `PROTO_DEBUG` - true | false - generate json debug files

If we need package.json, set up both options:

- `PROTO_PACKAGE_NAME` - generate package.json with name
- `PROTO_PACKAGE_VERSION` - generate package.json with version
- `PROTO_PACKAGE_URL` - set package url
- `PROTO_PACKAGE_REGISTRY` - set package registry

### Parser

Return JSON structure of `.proto` files.

```ts
import { readFileSync } from 'fs';
import { parser } from '@whisklabs/grpc';

const parsed = parser(readFileSync('some.proto', 'utf8'));
```

## GRPC

The query library is a factory of endpoints, for simultaneous work with different API servers.

### Setup gRPC instance

```ts
// Importing library
import { grpcHTTP, StatusCode } from '@whisklabs/grpc';

// Server gRPC instance
export const grpc = grpcHTTP({
  // URL to API server [Required]
  server: 'https://example.com',
  // Use or not credentials [default = true]
  credentials: true,
  // Send binary data of request/response to grpc-web devtools [default = false]
  debug: false,
  // Send JSON data of request/response to grpc-web devtools [default = false]
  devtool: false,
  // Instance of any console. Work with combine debug or devtool [default = undefined]
  logger: console,
  // Setup global timeout in number milliseconds [default = undefined]
  timeout: undefined,

  // Proxy xhr before request
  transformRequest: ({ xhr }) => {
    xhr.setRequestHeader('Authorization', 'ANY_TOKEN');
  },

  // Or example with modify data before send
  transformRequest: async ({ data }) => {
    if (isObject(data)) {
      (data as any).token = await SomeAction();
      return data;
    }
    return { ...data, x: 1 };
  },

  // Proxy result after request
  transformResponse: ({ data }) => {
    if (!data.success) {
      console.log(data.error);
    }

    // Passthrough without changes
    return data;
  },

  // Proxy result after request (async example)
  transformResponse: async ({ data }) => {
    // We can globaly check errors
    if (!data.success) {
      // Notify
      alert(`v1.Grpc.Event.GRPCError ${data.error.message}`);

      // Prevent
      if (data.error.httpStatus === 403) {
        const reason = await forbidden();
        return { success: false, error: { message: reason } };
      }

      // Redirect
      if (data.error.grpcCode === StatusCode.UNAUTHENTICATED) {
        logout();
      }
    }

    // Passthrough without changes
    return data;
  },
});
```

### Sending requests

After configuring gRPC instance and generating code from proto files, we can make requests to the server.

#### Simple example

```ts
// Importing generated code from proto files
import { whisk_api_user_v2_UserAPI_GetMe } from './proto';

// Importing gRPC instance
import { grpc } from './grpc';

// You not need use catch for more flatten code without try {}
const user = await grpc(whisk_api_user_v2_UserAPI_GetMe);

console.log(user.success && user.data.user?.email);
console.log(!user.success && user.error.message);

if (user.success) {
  // If success we have typed data
  // You don't need do any extra check
  console.log(user.data.user?.email);
} else {
  // If error we have same structure with optional fields
  console.log(
    user.error.message, // string?
    user.error.data, // unknown? | Object - lib tries do safe JSON.parse
    user.error.grpcCode, // number?
    user.error.httpStatus // number?
  );
}

// Destruction example for flatten style
const { data: me, error } = await grpc(whisk_api_user_v2_UserAPI_GetMe);

console.log(me?.user?.email);
console.log(error?.message);

if (me) {
  console.log(me.user?.email);
}

if (error) {
  console.log(error.message);
}
```

#### Cancel requests

It can be of two types:

- manual
- automatic

**Example of manually canceling a request.**

```ts
// Importing
import { grpcCancel } from '@whisklabs/grpc';

// Cancel controller
const cancel = grpcCancel();

document.body.addEventListener('click', () => {
  cancel();
  console.log('gRPC canceled');
});

// Method call
const result = await grpc(whisk_api_user_v2_UserAPI_GetMe, { cancel });

if (result.success) {
  console.log(result.data.user?.id);
}
```

**Example of automatic request cancellation.**

Tokens (strings) are used to identify requests. They operate within a single gRPC instance (independently of each other) and depend only on their name and nothing more.

This is more convenient than the manual version, because occurs in fully automatic mode.

```ts
// Start 1 request
grpc(whisk_api_user_v2_UserAPI_GetMe, { cancel: `some-token` });
// Stopped 1 request, because cancel ID already in progress,
// and after this start 2 request
grpc(whisk_api_user_v2_UserAPI_GetMe, { cancel: `some-token` });
// Start 3 request and NOT stopped 2 request,
// because it's another cancel ID
grpc(whisk_api_user_v2_UserAPI_GetMe, { cancel: `some-token-${123}` });
```

#### Mask

Because in grpc there are no null values for collection of fields it is necessary to list all reset variables in the form of an array of lines with ways for these fields.

```ts
import { whisk_api_user_v2_UserAPI_UpdateSettings } from './proto';
import { mask, maskWrap } from '@whisklabs/grpc';

// Manual example - the most reliable, because we do not have a single standard for masks
const settings = { personalDetails: { age: 1 } };
const mask = mask(settings);

await grpc(whisk_api_user_v2_UserAPI_UpdateSettings, { settings, mask });

// Wrapper (some projects)
await grpc(
  whisk_api_user_v2_UserAPI_UpdateSettings,
  maskWrap({ settings: { personalDetails: { age: 1 } } }, 'settings')
  // maskWrap({ settings: { personalDetails: { age: 1 } } }, 'settings', 'otherName')
);

// Built-in wrapper (some projects)
await grpc(
  whisk_api_user_v2_UserAPI_UpdateSettings,
  { settings: { personalDetails: { age: 1 } } },
  { mask: { field: 'settings'}
  // or with custom mask name
  // { mask: { field: 'settings', outField: 'otherName' }
);

// Semi-automatic wrapper for current object (some projects)
await grpc(
  whisk_api_user_v2_UserAPI_UpdateSettings,
  { settings: { personalDetails: { age: 1 } } },
  { mask: true }
);

// Automatic wrapper (waiting for the standard). Future - not implemented yet!
await grpc(
  whisk_api_user_v2_UserAPI_UpdateSettings,
  { settings: { personalDetails: { age: 1 } } }
);
```

#### All options

```ts
const result = await grpc(
  whisk_api_user_v2_UserAPI_UpdateSettings, // gRPC method
  { ... }, // gRPC params
  { // Query options
    mask: { field: 'settings'}, // { field: string, outField?: string } | boolean - mask
    cancel: `some-token-${123}`, // string | grpcCancel - cancel request
    onDownload: e => console.log(e.loaded / e.total), // download progress with ProgressEvent
    onUpload: e => console.log(e.loaded / e.total), // upload progress with ProgressEvent
    timeout: 2000, // number - timeout for this request with cancel request at the end
  }
);
```

#### Web Tools

This library is compatible with gRPC-Web Developer Tools.

[Chrome & Firefox Browser extension to aid gRPC-Web development](https://github.com/SafetyCulture/grpc-web-devtools)

[Chrome extension](https://chrome.google.com/webstore/detail/grpc-web-developer-tools/ddamlpimmiapbcopeoifjfmoabdbfbjj)

[Firefox extension](https://addons.mozilla.org/en-US/firefox/addon/grpc-web-developer-tools/)

```ts
grpcHTTP({
  // Send binary data of request/response to grpc-web devtools [default = false]
  debug: true,
  // Send JSON data of request/response to grpc-web devtools [default = false]
  devtool: true,
  ...
});
```

### Extraction types

```ts
import { ServiceRequest, ServiceResponse } from '@whisklabs/grpc';
import { whisk_api_user_v2_UserAPI_UpdateSettings } from './proto';

// Manual types
type request = ServiceRequest<whisk_api_user_v2_UserAPI_UpdateSettings>;
type response = ServiceResponse<whisk_api_user_v2_UserAPI_UpdateSettings>;
```

### Deep readonly

You can switch request and response to `DeepReadonly`.

```ts
import { GRPCDeep, grpcHTTP } from '@whisklabs/grpc';

const grpc = grpcHTTP({ ... }) as GRPCDeep;
```

Also there are helper types same as base types.

```ts
import { FieldGetDeep, ServiceRequestDeep, ServiceResponseDeep } from '@whisklabs/grpc';
```

### Default values

```ts
import { Default } from '@whisklabs/grpc';
import { whisk_api_user_v2_TestItem } from './proto';

const res = Default(whisk_api_user_v2_TestItem);

// res return new default object with required fields
// {
//   id: '',
//   array: [],
//   date: { day: 0, month: 0, year: 0 },
//   mapSearch: {},
//   name: '',
//   searches: [],
// };
```

### Unwrap and mapping data

```ts
import { unwrap } from '@whisklabs/grpc';

const userEmail = await unwrap(
  grpc(whisk_api_user_v2_UserAPI_UpdateSettings, { id: 'abc' }),
  data => data.user?.email,
  e => {
    console.log(e);
    return 1000;
  }
);

const user = await grpc(whisk_api_user_v2_UserAPI_GetMe);
const item = await unwrap(
  user,
  async success => {
    /* ... */
  },
  async error => {
    /* ... */
  }
);

// throw as usual promise
const err = e => {
  throw e;
};

try {
  const request = grpc(whisk_api_user_v2_UserAPI_GetMe);
  const email = await unwrap(request, data => data.user?.email, err);
} catch (e) {
  console.error(e);
}
```

## Messages and typings

This lib convert proto to TS, turning a dependency tree into a flat list for tree shaking.

To ensure non-intersection, absolute paths become part of the interface name separated by "\_".

### Primitives

All primitives are required fields

| Message  | TypeScript | Convert fn |
| :------- | :--------- | :--------- |
| double   | number     | parseFloat |
| float    | number     | parseFloat |
| int32    | number     | parseInt   |
| int64    | number     | parseInt   |
| uint32   | number     | parseInt   |
| uint64   | number     | parseInt   |
| sint32   | number     | parseInt   |
| sint64   | number     | parseInt   |
| fixed32  | number     | parseInt   |
| fixed64  | number     | parseInt   |
| sfixed32 | number     | parseInt   |
| sfixed64 | number     | parseInt   |
| bool     | boolean    | === true   |
| string   | string     | String     |
| bytes    | Uint8Array | -          |

### Wrappers

Wrappers are special messages for indicate optional primitive.

This messages auto wrap/unwrap by this lib.

| Message                     | Alias  | Real code             | TypeScript  |
| :-------------------------- | :----- | :-------------------- | :---------- |
| google.protobuf.DoubleValue | double | { value: number }     | number?     |
| google.protobuf.FloatValue  | float  | { value: number }     | number?     |
| google.protobuf.Int64Value  | int64  | { value: number }     | number?     |
| google.protobuf.UInt64Value | uint64 | { value: number }     | number?     |
| google.protobuf.Int32Value  | int32  | { value: number }     | number?     |
| google.protobuf.UInt32Value | uint32 | { value: number }     | number?     |
| google.protobuf.BoolValue   | bool   | { value: boolean }    | boolean?    |
| google.protobuf.StringValue | string | { value: string }     | string?     |
| google.protobuf.BytesValue  | bytes  | { value: Uint8Array } | Uint8Array? |

### Messages

Messages are same as interface in TS

```proto
message TestItem {
  string id = 1;
  google.protobuf.StringValue description = 2;
  InnerItem item = 10
  repeated bool array = 11;
  map<string, OtherItem> map_search = 12;

  message InnerItem {
    int32 id = 1;
  }
}

message OtherItem {
  float count = 1;
}
```

```ts
type TestItem = {
  id: string;
  description?: string;
  item?: TestItem_InnerItem;
  array: boolean[];
  mapSearch: Record<string, OtherItem>;
};

type TestItem_InnerItem = {
  id: number;
};

type OtherItem = {
  count: number;
};
```

### Enums

As TS enum.
`0` fields name with ending `_INVALID` or `_UNSPECIFIED` removed from typings.

```proto
message TestItem {
  Type id = 1;
  Type force = 2 [ required = true ];
  Direction dir = 3;
}

enum Type {
  TYPE_UNSPECIFIED = 0; // removed
  HEIGHT = 1;
  WIDTH = 2;
}

enum Direction {
  UP = 0; // Not used in our proto, but can be in third party proto
  DOWN = 1;
}
```

```ts
type TestItem = {
  id?: Type;
  forced: Type;
  dir?: Direction;
};

const enum Type {
  HEIGHT = 1,
  WIDTH = 2,
}

const enum Direction {
  UP = 0,
  DOWN = 1,
}
```

### Services

This is information about server methods, what types of messages are used for request and response.

```proto
message Request {
  int32 id = 1;
}

message Response {
  string name = 1;
}

service UserAPI {
  rpc GetMe(Request) returns (Response) {
    // can be some options
  }
}
```

```ts
type Request = {
  id: number;
};

type Response = {
  name: string;
};

export type UserAPI_GetMe = Service<Field<Request>, Field<Response>>;

// get back

type request = ServiceRequest<UserAPI_GetMe>;
type response = ServiceResponse<UserAPI_GetMe>;
```

### Oneof

This is a grouping of fields where only one of them can be set or read.

```proto
// file path: whisk/api/user/v2/user.proto
message TestOneof {
  string id = 1;

  oneof device {
    EthicalPreference device_type = 11;
    string custom_device = 12;
  }
}
```

```ts
export type whisk_api_user_v2_TestOneof = {
  id: string;
  device?:
    | { oneof: 'deviceType'; value: whisk_api_user_v2_EthicalPreference }
    | { oneof: 'customDevice'; value: string };
};
```

There are two helpers for work with oneof: `oneof` and `oneis`.

```ts
const data: whisk_api_user_v2_TestOneof = {
  id: '123',
  device: {
    oneof: 'customDevice',
    value: 'abc',
  },
};

// any value
const any = oneof(data.device);
// or
const val = data.device?.value;

// oneis example
if (oneis(data.device, 'customDevice')) {
  console.log(data.device?.value);
}

// If example
if (data.device?.oneof === 'customDevice') {
  console.log(data.device?.value);
}

// Limit value variants
const a = oneof(data.device, 'customDevice') ?? oneof(data.device, 'deviceType');
console.log(a);

// Function transform
const out = oneof(data.device, 'customDevice', v => `${v}a`) ?? oneof(data.device, 'deviceType', v => v * 3);
console.log(out);

// Switch example
let res: string | number | undefined;
switch (data.device?.oneof) {
  case 'customDevice':
    res = `${data.device.value}a`;
    break;
  case 'deviceType':
    res = data.device.value * 3;
    break;
}
console.log(res);
```

### Required and Optional

By default all `primitives`, `repeated` and `map` are **required**.
Other types are **optional**.

You can change this behaveour using option `required` or keyword `optional`.

```proto
message TestOneof {
  string id = 1;
  string name = 2 [ required = true ];
  string item = 3 [ required = false ];

  google.protobuf.StringValue description = 10;
  google.protobuf.StringValue test = 11 [ required = true ];
  google.protobuf.StringValue result = 12 [ required = false ];
  optional string story = 13;

  whisk.api.shared.v1.Time time = 30;
  whisk.api.shared.v1.Date date = 31 [ required = true ];
  whisk.api.shared.v1.Date date_new = 32 [ (required) = true ]; // ptotoc compatable
}
```

```ts
export type whisk_api_user_v2_TestOneof = {
  id: string;
  name: string;
  item?: string;

  description?: string;
  test: string;
  result?: string;
  story?: string;

  time?: whisk_api_shared_v1_Time;
  date: whisk_api_shared_v1_Date;
  dateNew: whisk_api_shared_v1_Date;
};
```

### Deprecated

For obsolete fields, you can mark them as `deprecated`.

```proto
message TestOneof {
  string id = 1 [ deprecated = true ];
  google.protobuf.StringValue description = 10 [ required = true, deprecated = true ];
}
```

```ts
export type whisk_api_user_v2_TestOneof = {
  /**  @deprecated true */
  id: string;
  /**  @deprecated true */
  description: string;
};
```

### Defaults

If field is required, bit not present in message, it is installed by table:

| Message  | Default    |
| :------- | :--------- |
| double   | 0          |
| float    | 0          |
| int32    | 0          |
| int64    | 0          |
| uint32   | 0          |
| uint64   | 0          |
| sint32   | 0          |
| sint64   | 0          |
| fixed32  | 0          |
| fixed64  | 0          |
| sfixed32 | 0          |
| sfixed64 | 0          |
| enum     | 0          |
| bool     | false      |
| string   | ''         |
| bytes    | Uint8Array |
