enum Block {
  none,
  comment,
  commentMulti,
  oneString,
  twoString,
}

const EMPTY: Record<string, boolean> = {
  ' ': true,
  '\t': true,
  '\n': true,
};

export const SYMBOLS: Record<string, boolean> = {
  '=': true,
  ',': true,
  ':': true,
  ';': true,
  '[': true,
  ']': true,
  '(': true,
  ')': true,
  '{': true,
  '}': true,
  '<': true,
  '>': true,
};

// eslint-disable-next-line complexity
export function tokenizer(source: string) {
  const tokens: string[] = [];
  const lines: number[] = [];
  const columns: number[] = [];
  let tmp = '';
  let block: Block = Block.none;
  let sameLine = true;
  let curLine = 1;
  let column = 1;

  const finalize = (after = false, force = false) => {
    if (tmp.length > 0 || force) {
      tokens.push(tmp);
      lines.push(curLine);
      columns.push(after ? column : column - tmp.length);
      tmp = '';
    }
  };

  for (let i = 0; i < source.length; i++) {
    const cur = source[i];
    const next = source[i + 1];

    switch (true) {
      case block === Block.none && '//' === cur + next:
        finalize();
        block = Block.comment;
        tmp += sameLine ? '!//' : '//';
        finalize(true);
        i++;
        column++;
        break;

      case block === Block.comment && '\n' === cur:
        block = Block.none;
        finalize(false, true);
        break;

      case block === Block.none && '/*' === cur + next:
        block = Block.commentMulti;
        finalize();
        tmp = '/*';
        finalize(true);
        i++;
        column++;
        break;

      case block === Block.commentMulti && '*/' === cur + next:
        block = Block.none;
        finalize(false, true);
        tmp = '*/';
        finalize(true);
        i++;
        column++;
        break;

      case block === Block.none && cur === "'":
        finalize();
        tmp = cur;
        block = Block.oneString;
        break;

      case block === Block.oneString && cur + next === "\\'":
        tmp += "'";
        i++;
        break;

      case block === Block.oneString && cur === "'":
        tmp += cur;
        finalize();
        block = Block.none;
        break;

      case block === Block.none && cur === '"':
        finalize();
        tmp = cur;
        block = Block.twoString;
        break;

      case block === Block.twoString && cur + next === '\\"':
        tmp += '"';
        i++;
        break;

      case block === Block.twoString && cur === '"':
        tmp += cur;
        finalize();
        block = Block.none;
        break;

      case block === Block.none && SYMBOLS[cur]:
        finalize();
        tmp = cur;
        finalize(true);
        break;

      case block === Block.none && EMPTY[cur]:
        finalize();
        break;

      default:
        tmp += cur;
    }

    if (block === Block.none && cur === '\n') {
      column = 1;
    } else {
      column++;
    }

    if (cur === '\n') {
      sameLine = false;
      curLine++;
    } else if (!EMPTY[cur]) {
      sameLine = true;
    }
  }

  return { tokens, lines, columns };
}
