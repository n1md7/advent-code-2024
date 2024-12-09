import { PartOne } from '@src/day-02/part-one';
import { expect, it, describe } from 'vitest';
import { readFileSync } from 'fs';
import { cwd } from 'node:process';

const path = cwd() + '/src/day-02/input.txt';
const input = readFileSync(path, 'utf-8');
const example = `
7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9
`;

describe('Day 02 - Part 1', () => {
  it('should verify example input', () => {
    const payload = example.trim();
    const partOne = new PartOne(payload);

    const result = partOne.solve();

    expect(result).toBe(2);
  });

  it('should verify real input', () => {
    const payload = input.trim();
    const partOne = new PartOne(payload);

    const result = partOne.solve();

    expect(result).toBe(314);
  });
});
