import { isPresent } from '@whisklabs/typeguards';

import { clone } from './utils';

type Msg = {
  method: string;
  methodType: 'server_streaming' | 'unary';
  request?: unknown;
  response?: unknown;
  error?: unknown;
};

let queue: Msg[] = [];
let run = false;
const delay = 1000; // grpc-web-devtools clear on start navigation

setTimeout(() => {
  run = true;
  send();
}, delay);

export const send = (item?: Msg) => {
  if (isPresent(item)) {
    queue.push(item);
  }

  if (run) {
    queue.forEach(message);
    queue = [];
  }
};

const message = (item: Msg) => {
  setTimeout(() => {
    window.postMessage(clone({ type: '__GRPCWEB_DEVTOOLS__', ...item }), '*');
  });
};
