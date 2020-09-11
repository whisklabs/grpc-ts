import { cleanComment, next, setComment } from './comment';
import { Thrower } from './thrower';
import { tokenizer } from './tokenizer';
import { ParseEnums } from './tokens/enums';
import { ParseImport } from './tokens/import';
import { ParseExtend, ParseMessage } from './tokens/message';
import { ParseOptions } from './tokens/options';
import { ParsePackage } from './tokens/package';
import { ParseService } from './tokens/service';
import { ParseSyntax } from './tokens/syntax';
import { Schema } from './types';
import { insertOption } from './utils';

function parse(tokens: string[]) {
  const schema: Schema = {
    syntax: 3,
    imports: [],
    enums: [],
    messages: [],
    options: {},
    extends: [],
    services: [],
  };

  cleanComment();
  setComment(schema);

  let first = true;

  while (tokens.length > 0) {
    switch (next(tokens)) {
      case 'syntax':
        if (!first) {
          throw new Thrower('syntax', [['must be on first line', 0]]);
        }
        schema.syntax = ParseSyntax(tokens);
        break;

      case 'package':
        schema.package = ParsePackage(tokens);
        break;

      case 'message':
        schema.messages.push(ParseMessage(tokens));
        break;

      case 'import':
        schema.imports.push(ParseImport(tokens));
        break;

      case 'enum':
        schema.enums.push(ParseEnums(tokens));
        break;

      case 'option': {
        const { field, value } = ParseOptions(tokens);
        insertOption(schema.options, field, value);
        break;
      }

      case 'extend':
        schema.extends.push(ParseExtend(tokens));
        break;

      case 'service':
        schema.services.push(ParseService(tokens));
        break;

      default:
        throw new Thrower('common', [[`Unexpected token: ${tokens[0]}`, 0]]);
    }
    first = false;
  }

  Extend(schema);

  return schema;
}

function Extend(schema: Schema) {
  for (const ext of schema.extends) {
    for (const msg of schema.messages) {
      if (msg.name === ext.name) {
        if (msg.extensions.length === 0) {
          throw new Thrower('extends', [[`${msg.name} does not have extensions`, 0]]);
        }

        for (const field of ext.message.fields) {
          for (const extension of msg.extensions) {
            if (field.tag < extension.from || field.tag > extension.to) {
              throw new Thrower('extends', [[`${msg.name} does not declare ${field.tag} as an extension number`, 0]]);
            }
            msg.fields.push(field);
          }
        }
      }
    }
  }
}

export function parser(buf: string | Buffer) {
  const { tokens, lines, columns } = tokenizer(buf.toString());

  try {
    return parse(tokens);
  } catch (e) {
    if (e instanceof Thrower) {
      e.addRange(tokens);
      e.addLine(lines[lines.length - tokens.length]);
      e.addColumn(columns[lines.length - tokens.length + e.message[0][1]]);
    }
    throw e;
  }
}
