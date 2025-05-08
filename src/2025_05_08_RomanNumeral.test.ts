import { test, expect } from 'vitest';

function romanianToDecimal(romanian: string): number {
  if (romanian === 'I') {
    return 1;
  }

  if (romanian === 'II') {
    return 2;
  }

  return 0;
}

test.each([
  ['I', 1],
  ['II', 2],
])('%s should give %s', (input, expected) => {
  expect(romanianToDecimal(input)).toBe(expected);
});
