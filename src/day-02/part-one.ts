import type { Solution } from '@src/interfaces/solution';
import { Value } from '@src/utils/Value.ts';

export class PartOne implements Solution<number> {
  private readonly input: string[];

  constructor(input: string) {
    this.input = input.split('\n');
  }

  solve(): number {
    return this.input.reduce((count, report) => {
      const numbers = report.split(' ').map(Number);
      const [one, two] = numbers;

      if (one === two) return count;

      const increasing = new Value(one < two);

      for (let idx = 0; idx < numbers.length - 1; idx++) {
        const decremented = numbers[idx] >= numbers[idx + 1];
        const decrementedTooMuch = numbers[idx] - numbers[idx + 1] > 3;
        const incremented = numbers[idx] <= numbers[idx + 1];
        const incrementedTooMuch = numbers[idx + 1] - numbers[idx] > 3;

        if (increasing.valueOf()) {
          if (decremented || incrementedTooMuch) {
            return count;
          }
        } else {
          if (incremented || decrementedTooMuch) {
            return count;
          }
        }
      }

      return count + 1;
    }, 0);
  }
}
