import { readFileSync, readdirSync, unlinkSync, writeFileSync } from 'fs';
import { join } from 'path';

import { parser } from '../../src/parser';
import { Thrower } from '../../src/parser/thrower';
import { ParseField } from '../../src/parser/tokens/field';
import { MessageBody } from '../../src/parser/tokens/message';
import { ParseOneOf } from '../../src/parser/tokens/oneof';
import { InnerOptions, OptionArray, OptionValue } from '../../src/parser/tokens/options';
import { ParseReserved, ParseReservedItem } from '../../src/parser/tokens/reserved';
import { ParseRPC } from '../../src/parser/tokens/rpc';

const readFile = (name: string, folder = successPath) => readFileSync(join(__dirname, folder, name), 'utf-8');
const writeFile = (name: string, body: string, folder = successPath) =>
  writeFileSync(join(__dirname, folder, name), body, 'utf-8');
const readJSON = (file: string, folder = successPath) =>
  JSON.parse(readFileSync(join(__dirname, folder, `${file.replace('.proto', '.json')}`), 'utf8'), (_, i: unknown) =>
    i === null ? undefined : i
  ) as Record<string, unknown>;
const deleteFile = (name: string, folder = successPath) => unlinkSync(join(__dirname, folder, name));
const filterProto = (file: string) => /\.proto$/.test(file);

const successPath = 'success';
const errorPath = 'error';

const successFiles = readdirSync(join(__dirname, successPath));
const errorFiles = readdirSync(join(__dirname, errorPath));

describe(successPath, () => {
  successFiles.filter(filterProto).forEach(file => {
    it(file, () => {
      const parsed = parser(readFile(file));
      const fName = file.replace('.proto', '.diff.json');

      writeFile(fName, JSON.stringify(parsed, null, 2));
      expect(parsed).toEqual(readJSON(file));
      deleteFile(fName);
    });
  });
});

describe(errorPath, () => {
  errorFiles.filter(filterProto).forEach(file => {
    it(file, () => {
      let error = false;
      const fName = file.replace('.proto', '.diff.json');

      try {
        parser(readFile(file, errorPath));
      } catch (e) {
        error = true;
        writeFile(fName, JSON.stringify(e, null, 2), errorPath);
        expect(e).toEqual(readJSON(file, errorPath));
        deleteFile(fName, errorPath);
      }

      expect(error).toBe(true);
    });
  });
});

describe('other', () => {
  it('comparing extended and not extended schema', () => {
    const sch = parser(readFile('extend.proto'));
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-explicit-any
    expect((sch.messages as any).MsgNormal).toEqual((sch.messages as any).MsgExtend);
  });
});

describe('Field', () => {
  it('Field empty', () => {
    try {
      ParseField([]);
    } catch (e) {
      expect(e).toEqual(new Thrower('field', [['No ; found for message field', 0]]));
    }
  });

  it('Field empty name', () => {
    try {
      ParseField(['=', '123', ';']);
    } catch (e) {
      expect(e).toEqual(new Thrower('field', [['Missing field name', 0]]));
    }
  });

  it('Field empty tag', () => {
    try {
      ParseField(['required', 'type', 'name', '=', '', ';']);
    } catch (e) {
      expect(e).toEqual(new Thrower('field', [['Missing tag number in message field: name', 0]]));
    }
  });

  it('Field empty type', () => {
    try {
      ParseField(['required', '', 'name', '=', '1', ';']);
    } catch (e) {
      expect(e).toEqual(new Thrower('field', [['Missing type in message field: name', 0]]));
    }
  });

  it('Field empty undefined', () => {
    try {
      ParseField(['required', 'type', 'name', '//', 'comment']);
    } catch (e) {
      expect(e).toEqual(new Thrower('field', [['No ; found for message field', 0]]));
    }
  });
});

describe('Message', () => {
  it('Message empty', () => {
    try {
      MessageBody([';', '//', 'comment'], 'name');
    } catch (e) {
      expect(e).toEqual(new Thrower('message', [['no close tag "}"', 0]]));
    }
  });
});

describe('Oneof', () => {
  it('Oneof empty', () => {
    try {
      ParseOneOf(['oneof', 'name', '{', '//', 'comment']);
    } catch (e) {
      expect(e).toEqual(new Thrower('oneof', [['no close tag "}"', 0]]));
    }
  });
});

describe('Options', () => {
  it('Options value', () => {
    try {
      OptionValue(['{', '//', 'comment']);
    } catch (e) {
      expect(e).toEqual(new Thrower('option array', [['no close tag "}"', 0]]));
    }
  });

  it('Options array', () => {
    try {
      OptionArray(['//', 'comment']);
    } catch (e) {
      expect(e).toEqual(new Thrower('options array', [['no close tag "]"', 0]]));
    }
  });

  it('Options array token', () => {
    try {
      OptionArray(['comment']);
    } catch (e) {
      expect(e).toEqual(new Thrower('options array', [['Unexpected token "comment"', 0]]));
    }
  });

  it('Options inner', () => {
    try {
      InnerOptions(['//', 'comment']);
    } catch (e) {
      expect(e).toEqual(new Thrower('inner options', [['no close tag "]"', 0]]));
    }
  });
});

describe('Reserved', () => {
  it('Reserved item', () => {
    try {
      ParseReservedItem(['}']);
    } catch (e) {
      expect(e).toEqual(
        new Thrower('reserved', [
          ['Token "}" not equal "number"', 0],
          ['Token "" not equal "to"', 1],
          ['Token "}" not equal "number,string"', 0],
        ])
      );
    }
  });

  it('Reserved token', () => {
    try {
      ParseReserved(['name']);
    } catch (e) {
      expect(e).toEqual(new Thrower('reserved', [['Unexpected token "name"', 0]]));
    }
  });

  it('Reserved token', () => {
    try {
      ParseReserved(['reserved', '1', '//', 'comment']);
    } catch (e) {
      expect(e).toEqual(new Thrower('reserved', [['no close tag ";"', 0]]));
    }
  });
});

describe('Rpc', () => {
  it('Rpc empty', () => {
    let i = 0;

    const prox = new Proxy(['rpc', 'name', '(', 'name', ')', 'returns', '(', 'name', ')', '{', '}', 'comment'], {
      get(target, prop: unknown) {
        if (target[prop as number] === '}') {
          const text = i < 4 ? '}' : '//';
          i++;
          return text;
        } else {
          return target[prop as number];
        }
      },
    });

    let er: unknown;
    try {
      ParseRPC(prox);
    } catch (e) {
      er = e;
    }

    expect(er).toEqual(new Thrower('rpc', [['no close tag "}"', 0]]));
  });
});
