import type { Solution } from '@src/interfaces/solution';

type int = number;

export class PartTwo implements Solution<number> {
  private readonly input: string[];

  constructor(input: string) {
    this.input = input.split('\n');
  }

  solve(): number {
    return this.input.reduce((count, report) => {
      const numbers = report.split(' ').map(Number);

      if (this.isSafe(numbers)) return count + 1;

      for (let i = 0; i < numbers.length; i++) {
        const copy = Array.from(numbers);
        copy.splice(i, 1);

        if (this.isSafe(copy)) return count + 1;
      }

      return count;
    }, 0);
  }

  isSafe(nums: number[]) {
    const [one, two] = nums;

    const isTooMuch = (a: int, b: int) => Math.abs(a - b) > 3;

    let previouslyIncreased = one < two;
    for (let i = 0; i < nums.length - 1; i++) {
      const current = nums[i];
      const next = nums[i + 1];

      if (current === next) return false;

      const tooMuch = isTooMuch(current, next);
      const nowDecremented = current > next;
      const nowIncremented = current < next;

      if (previouslyIncreased) {
        if (nowDecremented || tooMuch) return false;
      } else {
        if (nowIncremented || tooMuch) return false;
      }

      previouslyIncreased = current < next;
    }

    return true;
  }
}
