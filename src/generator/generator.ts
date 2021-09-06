import { Parser } from '../parser';

export interface Config {
  dir: string;
  out: string;
  version?: string;
  exclude?: RegExp;
  debug?: boolean;
  messageRequired?: boolean;
  packageName?: string;
  packageVersion?: string;
  packageUrl?: string;
  packageRegistry?: string;
}

export interface Out {
  filepaths: string[];
  schemas: Parser.Schema[];
}

export type MakeOut = string | null;

export type MakeOuts = {
  js: MakeOut[];
  dts: MakeOut[];
  names: Set<string>;
  fields: [string, string][];
  errors: string[];
  packagesList: Set<string>;
  enumsList: Set<string>;
};

export type List = { name: string; pack: string };
