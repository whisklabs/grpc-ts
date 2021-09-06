export type Option = string | boolean | Options | Option[] | Options[] | undefined;

export interface Options {
  comment?: string;
  [key: string]: Option;
}

export interface Enum {
  name: string;
  values: {
    [key: string]: {
      value: number;
      options: Options;
      comment?: string;
    };
  };
  options: Options;
  comment?: string;
}

export interface Field {
  name: string;
  type: string;
  tag: number;
  map?: {
    from: string;
    to: string;
  };
  oneof?: string;
  required: boolean;
  optional: boolean;
  repeated: boolean;
  options: Options;
  comment?: string;
}

export type Reserved =
  | number
  | string
  | {
      from: number;
      to: number;
    };

export interface Message {
  name: string;
  enums: Enum[];
  extends: Extend[];
  extensions: Extension[];
  messages: Message[];
  options: Options;
  fields: Field[];
  comment?: string;
  reserved: Reserved[][];
}

export interface Extend {
  name: string;
  message: Message;
}

export interface Extension {
  from: number;
  to: number;
}

export interface Service {
  name: string;
  methods: Method[];
  options: Options;
  comment?: string;
}

export interface Method {
  name: string;
  inputType: string;
  outputType: string;
  clientStreaming: boolean;
  serverStreaming: boolean;
  options: Options;
  comment?: string;
}

export interface Schema {
  syntax: number;
  package?: string;
  imports: string[];
  enums: Enum[];
  messages: Message[];
  options: Options;
  extends: Extend[];
  services: Service[];
  comment?: string;
}
