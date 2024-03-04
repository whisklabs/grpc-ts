import { isText } from '@whisklabs/typeguards';

import { Parser } from '../parser';

import { pathField } from './field';
import { MakeOuts } from './generator';
import { joinPath, toComment } from './utils';

export function services(pack: string, out: MakeOuts, items: Parser.Service[] = []) {
  for (const msg of items) {
    service(pack, out, msg);
  }
}

function service(pack: string, out: MakeOuts, item: Parser.Service) {
  for (const msg of item.methods) {
    method(pack, out, msg, item);
  }
}

export function method(pack: string, out: MakeOuts, item: Parser.Method, serv: Parser.Service) {
  const sName = joinPath(pack, serv.name, item.name);
  const input = pathField(item.inputType, pack, out);
  const output = pathField(item.outputType, pack, out);

  out.fields.push([input, sName], [output, sName]);

  if (isText(item.comment)) {
    out.dts.push(toComment(item.comment));
  }
  out.dts.push(`export type ${sName} = Service<Field<${input}>, Field<${output}>>;`);
  out.dts.push(`export const ${sName}: ${sName};`);

  out.js.push(`export const ${sName} = {`);
  out.js.push(`  name: "${pack}.${serv.name}/${item.name}",`);
  out.js.push(`  encode: ${input},`);
  out.js.push(`  decode: ${output},`);
  // const rest = getREST(item.options['google.api.http']);
  // if (rest) {
  //   out.push(`  rest: [`);
  //   for (const [name, url, body] of rest) {
  //     out.push(`    { method: "${name}", url: "${url}"${isString(body) ? `, body: "${body}"` : ''} },`);
  //   }
  //   out.push(`  ],`);
  // }
  out.js.push('};');
}

// For REST
// const METHODS: Record<string, boolean> = {
//   get: true,
//   put: true,
//   post: true,
//   delete: true,
//   patch: true,
// };

// function getREST(http: unknown, rest: [string, string, unknown][] = []) {
//   if (isObject(http)) {
//     for (const i in http) {
//       if (METHODS[i]) {
//         const u = http[i];
//         rest.push([i, isString(u) ? u : '', http.body]);
//       } else if (i === 'custom' && isObject(http.custom)) {
//         const name = isString(http.custom.kind) ? http.custom.kind : '';
//         const url = isString(http.custom.path) ? http.custom.path : '';
//         rest.push([name, url, http.body]);
//       }
//     }

//     getREST(http.additional_bindings, rest);
//     return rest;
//   }
// }
