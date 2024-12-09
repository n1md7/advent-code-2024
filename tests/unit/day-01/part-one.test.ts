
import { PartOne } from '@src/day-01/part-one';
import { expect, it, describe } from 'vitest';
import { readFileSync } from 'fs';
import { cwd } from 'node:process';

const path = cwd() + '/src/day-01/input.txt';
const input = readFileSync(path, 'utf-8');
const example = `
3   4
4   3
2   5
1   3
3   9
3   3
`;

describe('Day 01 - Part 1', () => {
  it('should verify example input', () => {
    const payload = example.trim();
    const partOne = new PartOne(payload);

    const result = partOne.solve();

    expect(result).toBe(11);
  });

  it('should verify real input', () => {
    const payload = input.trim();
    const partOne = new PartOne(payload);

    const result = partOne.solve();

    expect(result).toBe(2192892);
  });
});

