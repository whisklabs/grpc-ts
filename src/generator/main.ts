/* eslint-disable no-console */

import { isText } from '@whisklabs/typeguards';
import { promises as fs } from 'fs';
import { extname, isAbsolute, join, parse as pathParse, relative } from 'path';
import { CompilerOptions, ModuleKind, ModuleResolutionKind, ScriptTarget, transpileModule } from 'typescript';

import { Parser, parser } from '../parser';
import { collectEmuns, collectMessages, collectServices } from './collect';
import { enums } from './enum';
import { Config, MakeOuts, Out } from './generator';
import { messages } from './message';
import { services } from './service';
import { walk } from './utils';

export async function generator({
  dir,
  out,
  exclude = /^$/,
  version = 'unknown',
  debug = false,
  packageName,
  packageVersion,
  packageUrl = 'git@github.com:whisklabs/npm.git',
  packageRegistry = 'https://npm.pkg.github.com/',
}: Config) {
  const IN_DIR = isAbsolute(dir) ? dir : join(process.cwd(), dir);
  const OUT_DIR = isAbsolute(out) ? out : join(process.cwd(), out);
  const DEBUG_DIR = join(OUT_DIR, 'debug');

  const lic = `// Code created by grpc-generator. Version: ${version}`;
  const lib = `import {
  FieldMap,
  FieldRepeated,
  FieldType,
  FieldItem,
  Field,
  FieldEmpty,
  FieldGet,
  Service,
  ServiceRequest,
  ServiceResponse,
  Values
} from '${version === 'test' ? '../../src' : '@whisklabs/grpc'}';`;

  let lastFile = '';

  try {
    const { schemas } = await walk<Out>({
      filename: IN_DIR,
      result: { filepaths: [], schemas: [] },
      each: async ({ result, filename }) => {
        if (extname(filename) === '.proto' && !exclude.test(filename)) {
          lastFile = filename;
          result.filepaths.push(filename);

          const parsed = parser(await fs.readFile(filename, 'utf8'));
          if (debug) {
            const outFile = pathParse(join(DEBUG_DIR, relative(dir ?? '', filename)));

            await fs.mkdir(outFile.dir, { recursive: true });
            await fs.writeFile(join(outFile.dir, `${outFile.name}.json`), JSON.stringify(parsed, null, 2));
          }
          result.schemas.push(parsed);
        }
      },
    });

    const { js, dts, errors, fields, names } = make(schemas);

    for (const [type, field] of fields) {
      if (!names.has(type)) {
        errors.push(`\x1b[31mNo found message or enum:\x1b[0m ${type} [${field}]`);
      }
    }

    dts.unshift(lic, lib, '');
    js.unshift(lic, '"use strict";', '');

    const dtsString = dts.join('\n');
    const jsString = js.join('\n');

    checkTypes(dtsString, errors);
    checkTypes(jsString, errors);

    const hasError = errors.length > 0;

    if (hasError) {
      errors.forEach(i => console.error(i));
    } else {
      await fs.mkdir(OUT_DIR, { recursive: true });
      await fs.writeFile(join(OUT_DIR, 'index.d.ts'), dtsString);
      await fs.writeFile(join(OUT_DIR, 'index.js'), transpile(jsString));
      await fs.writeFile(join(OUT_DIR, 'esm.js'), transpile(jsString, { module: ModuleKind.ES2015 }));
      if (isText(packageName) && isText(packageVersion)) {
        await fs.writeFile(
          join(OUT_DIR, 'package.json'),
          packageTemplate({ packageName, packageVersion, packageUrl, packageRegistry })
        );
      }
    }

    return hasError;
  } catch (e) {
    console.info(`Last processing file was "\x1b[31m${lastFile}\x1b[0m"`);
    console.error(e);
    return true;
  }
}

export const transpile = (source: string, options?: CompilerOptions) =>
  transpileModule(source, {
    compilerOptions: {
      allowJs: true,
      module: ModuleKind.CommonJS,
      target: ScriptTarget.ES5,
      moduleResolution: ModuleResolutionKind.NodeJs,
      ...options,
    },
  }).outputText;

export function checkTypes(file: string, errors: string[]) {
  const { diagnostics } = transpileModule(file, { reportDiagnostics: true });

  for (const diagnostic of diagnostics ?? []) {
    errors.push(`\x1b[31mTS error:\x1b[0m ${JSON.stringify(diagnostic.messageText)}`);
  }
}

export function make(schemas: Parser.Schema[]): MakeOuts {
  const out: MakeOuts = {
    js: [],
    dts: [],
    names: new Set(),
    errors: [],
    fields: [],
    packagesList: new Set(),
    enumsList: new Set(),
  };

  for (const schema of schemas) {
    const path = schema.package ?? '';
    out.packagesList.add(path);

    collectEmuns(path, out, schema.enums);
    collectMessages(path, out, schema.messages);
    collectServices(path, out, schema.services);
  }

  for (const schema of schemas) {
    const path = schema.package ?? '';
    enums(path, out, schema.enums);
  }

  for (const schema of schemas) {
    const path = schema.package ?? '';
    messages(path, out, schema.messages, []);
    services(path, out, schema.services);
  }

  return out;
}

export interface Package {
  packageName: string;
  packageVersion: string;
  packageUrl: string;
  packageRegistry: string;
}

export const packageTemplate = ({ packageName, packageVersion, packageUrl, packageRegistry }: Package) => `{
  "name": "${packageName}",
  "version": "${packageVersion}",
  "repository": {
    "type": "git",
    "url": "${packageUrl}"
  },
  "publishConfig": {
    "registry": "${packageRegistry}"
  },
  "main": "./index.js",
  "module": "./esm.js",
  "types": "./index.d.ts",
  "peerDependencies": {
    "@whisklabs/grpc": "*"
  }
}`;
