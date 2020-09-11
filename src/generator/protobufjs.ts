import { isText } from '@whisklabs/typeguards';
import { mkdirSync, readdirSync, statSync } from 'fs';
import { extname, join } from 'path';
import { pbjs, pbts } from 'protobufjs/cli';

const { PROTO_DIR, PROTO_OUT } = process.env;

if (!isText(PROTO_DIR)) {
  throw new Error('No PROTO_DIR path');
}

if (!isText(PROTO_OUT)) {
  throw new Error('No PROTO_OUT path');
}

mkdirSync(PROTO_OUT, { recursive: true });

// dublicate bugs
const exclude = /google\/api\/http\.proto|google\/protobuf\/(descriptor|type|source_context|api).proto|bugs\//;

const files = walk(PROTO_DIR);

pbjs.main([
  '-t',
  'static-module',
  '-w',
  'es6',
  '--es6',
  '-o',
  `${PROTO_OUT}/out.js`,
  '--no-delimited',
  '--no-create',
  '--no-convert',
  '--no-verify',
  ...files,
]);
pbjs.main([
  '-t',
  'json',
  '-w',
  'es6',
  '--es6',
  '-o',
  `${PROTO_OUT}/json.json`,
  '--no-delimited',
  '--no-create',
  '--no-convert',
  '--no-verify',
  ...files,
]);
pbjs.main([
  '-t',
  'json-module',
  '-w',
  'es6',
  '--es6',
  '-o',
  `${PROTO_OUT}/json-module.js`,
  '--no-delimited',
  '--no-create',
  '--no-convert',
  '--no-verify',
  ...files,
]);
pbts.main(['-o', `${PROTO_OUT}/out.d.ts`, `${PROTO_OUT}/out.js`, ...files]);

function walk(directory: string, filepaths: string[] = []) {
  const dirFiles = readdirSync(directory);
  for (const filename of dirFiles) {
    const filepath = join(directory, filename);
    if (statSync(filepath).isDirectory()) {
      walk(filepath, filepaths);
    } else if (extname(filename) === '.proto' && !exclude.test(filepath)) {
      filepaths.push(filepath);
    }
  }
  return filepaths;
}
