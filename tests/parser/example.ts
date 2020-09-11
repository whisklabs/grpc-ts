import { readFileSync, writeFileSync } from 'fs';

import { parser } from '../../src/parser';
import { tokenizer } from '../../src/parser/tokenizer';

const sch = readFileSync('example.proto', 'utf8');

writeFileSync('tokenizer.log', tokenizer(sch).tokens.join('\n'), 'utf8');
writeFileSync('tokenizer-lines.log', tokenizer(sch).lines.join('\n'), 'utf8');
writeFileSync('tokenizer-columns.log', tokenizer(sch).columns.join('\n'), 'utf8');
writeFileSync('parser.log', JSON.stringify(parser(sch), null, 2), 'utf8');
