import { isPresent, isString, isText } from '@whisklabs/typeguards';

import { Thrower } from './thrower';
import { Option, Options } from './types';

export const cut = <T>(arr: T[], count: number) => arr.splice(0, count);

export const cutStr = (str?: string) => str?.slice(1, -1) ?? '';

type Validator = string | ((item?: string) => boolean);

type CheckConfig = {
  strict?: boolean;
  ignore?: boolean;
  result?: boolean;
};

export const ch = (rule: Validator | Validator[], config?: CheckConfig) => ({ rule, config });

type Checks = ReturnType<typeof ch>;

type Config = {
  type?: string;
  rules: Checks[];
  tokens: Tokens;
};

export type Tokens = (string | undefined)[];

export function check({ type, rules, tokens }: Config) {
  const errors: [string, number][] = [];
  const results: string[] = [];
  const range: Tokens = tokens.slice(0, rules.length);
  let iToken = 0;

  for (let i = 0; i < rules.length; i++) {
    const { rule, config } = rules[i];
    const val = Array.isArray(rule) ? rule : [rule];
    const token = tokens[config?.strict === true ? i : iToken] ?? '';
    let valid = false;

    for (const validator of val) {
      if (!valid) {
        valid = typeof validator === 'function' ? validator(token) : token === validator;
      }
    }

    if (config?.result === true) {
      results.push(valid ? token : '');
    }
    if (!valid && config?.ignore !== true) {
      errors.push([`Token "${token}" not equal "${val.join(',')}"`, i]);
    }
    if (valid || (!valid && config?.ignore !== true)) {
      iToken++;
    }
  }

  if (errors.length > 0 && isString(type)) {
    errors.push([range.join(', '), 0]);
    throw new Thrower(type, errors);
  }

  return { errors, results, range, len: iToken };
}

export const semicolon = (tokens: string[]) => {
  if (tokens[0] === ';') {
    tokens.shift();
  }
};

export function insertOption(
  result: Options,
  field: string | undefined,
  out: string | boolean | Options | Option[] | undefined
) {
  if (!isText(field)) {
    throw new Thrower('insert option', [['No any field name', 0]]);
  }

  if (isPresent(result[field])) {
    if (Array.isArray(result[field])) {
      if (Array.isArray(out)) {
        result[field] = (result[field] as Option[]).concat(out);
      } else {
        (result[field] as Option[]).push(out);
      }
    } else {
      result[field] = [result[field]];
      (result[field] as Option[]).push(out);
    }
  } else {
    result[field] = out;
  }
}
