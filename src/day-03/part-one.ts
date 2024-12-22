import type { Solution } from '@src/interfaces/solution';

export class PartOne implements Solution<number> {
  private input: string;

  constructor(input: string) {
    this.input = input;
  }

  solve(): number {
    const pattern = /mul\((\d{1,3}),(\d{1,3})\)/g;
    const matches = this.input.match(pattern);

    if (matches) {
      return matches.reduce((sum, match) => {
        const nums = match.match(/\d{1,3}/g);
        if (nums) {
          return sum + parseInt(nums[0]) * parseInt(nums[1]);
        }

        return sum;
      }, 0);
    }

    return 0;
  }
}
