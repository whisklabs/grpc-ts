import { Tokens } from './utils';

export class Thrower {
  line = 0;
  column = 0;
  range: Tokens = [];

  constructor(public name: string, public message: [string, number][]) {}

  addLine(num: number) {
    this.line = num;
  }

  addColumn(num: number) {
    this.column = num;
  }

  addRange(range: Tokens) {
    this.range = range.length > 10 ? range.slice(0, 5).concat(['...'], range.slice(-5)) : range;
  }
}
