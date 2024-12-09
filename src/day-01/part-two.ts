import type { Solution } from '@src/interfaces/solution';

export class PartTwo implements Solution<number> {
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

    const counted = new Map<number, number>();

    two.forEach(value => {
      const count = counted.get(value) ?? 0;
      counted.set(value, count + 1);
    });

    return one.reduce((sum, value) => {
      const count = counted.get(value) ?? 0;
      const score = value * count;

      return sum + score;
    }, 0);
  }
}
