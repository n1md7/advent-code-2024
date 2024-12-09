import type { Solution } from '@src/interfaces/solution';

export class PartOne implements Solution<number> {
  private readonly input: string[];

  constructor(input: string) {
    this.input = input.split('\n');
  }

  solve(): number {
    const one: number[] = [];
    const two: number[] = [];

    this.input.forEach(line => {
      const [a, b] = line.split('   ').map(Number);
      one.push(a);
      two.push(b);
    });

    one.sort((a, b) => a - b);
    two.sort((a, b) => a - b);

    return one.reduce((result, _, i) => {
      return result + Math.abs(one[i] - two[i]);
    }, 0);
  }
}
