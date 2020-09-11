import { isPresent, isText } from '@whisklabs/typeguards';

import { cut } from './utils';

let comment = '';
let lastComment: { comment?: string } = {};

export function writeComment(com: { comment?: string }) {
  const co = (com.comment ?? '') + comment;

  if (isText(co)) {
    com.comment = co;
  }

  comment = '';
  lastComment = com;
}

export function setComment(com: { comment?: string }) {
  lastComment = com;
}

export function cleanComment() {
  comment = '';
}

export function next(tokens: string[]): string | undefined {
  while (tokens.length > 0) {
    switch (tokens[0]) {
      case '//': {
        const comments = cut(tokens, 2);
        comment = (comment !== '' ? `${comment}\n` : comment) + comments[1];
        break;
      }

      case '/*': {
        const commentsMulti = cut(tokens, 3);
        comment = (comment !== '' ? `${comment}\n` : comment) + commentsMulti[1];
        break;
      }

      case '!//': {
        const commentInline = cut(tokens, 2);
        comment = (comment !== '' ? `${comment}\n` : comment) + commentInline[1];
        if (isPresent(lastComment)) {
          lastComment.comment = comment;
          comment = '';
        }
        break;
      }

      default:
        return tokens[0];
    }
  }

  return tokens[0];
}
