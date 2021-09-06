#!/usr/bin/env node

/* eslint-disable camelcase */

import { isPresent, isText } from '@whisklabs/typeguards';
import { existsSync } from 'fs';
import { join } from 'path';

import { generator } from './main';

const {
  PROTO_DIR,
  PROTO_OUT,
  PROTO_EXCLUDE,
  PROTO_VERSION,
  PROTO_DEBUG,
  PROTO_PACKAGE_NAME,
  PROTO_PACKAGE_VERSION,
  PROTO_PACKAGE_URL,
  PROTO_PACKAGE_REGISTRY,
  PROTO_MESSAGE_REQUIRED,
  npm_package_devDependencies__whisklabs_grpc,
  npm_package_dependencies__whisklabs_grpc,
} = process.env;

if (!isText(PROTO_DIR)) {
  throw new Error('No PROTO_DIR input folder');
}

if (!isText(PROTO_OUT)) {
  throw new Error('No PROTO_OUT out folder');
}

// eslint-disable-next-line @typescript-eslint/no-floating-promises
generator({
  dir: PROTO_DIR,
  out: PROTO_OUT,
  version: isText(PROTO_VERSION)
    ? PROTO_VERSION
    : findRoot() ?? npm_package_devDependencies__whisklabs_grpc ?? npm_package_dependencies__whisklabs_grpc,
  exclude: isText(PROTO_EXCLUDE) ? new RegExp(PROTO_EXCLUDE) : undefined,
  messageRequired: isPresent(PROTO_MESSAGE_REQUIRED),
  debug: PROTO_DEBUG === 'true',
  packageName: PROTO_PACKAGE_NAME,
  packageVersion: PROTO_PACKAGE_VERSION,
  packageUrl: PROTO_PACKAGE_URL,
  packageRegistry: PROTO_PACKAGE_REGISTRY,
}).then(error => process.exit(error ? 1 : 0));

function findRoot() {
  let path = __dirname;
  const file = 'package.json';
  while (!existsSync(join(path, file))) {
    if (path === process.cwd()) {
      return undefined;
    }
    path = join(path, '..');
  }

  // eslint-disable-next-line
  return require(join(path, file))?.version as string | undefined;
}
