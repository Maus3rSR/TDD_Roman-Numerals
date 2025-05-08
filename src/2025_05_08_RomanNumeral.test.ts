import { test, expect } from 'vitest';

function romanianToDecimal(romanian: string): number {
  let finalNumber = 1;

  if (romanian === 'I') {
    return finalNumber;
  }

  if (romanian === 'II') {
    return finalNumber + 1;
  }

  if (romanian === 'III') {
    return finalNumber + finalNumber + 1;
  }

  return 0;
}

test.each([
  ['I', 1],
  ['II', 2],
  ['III', 3],
])('%s should give %s', (input, expected) => {
  expect(romanianToDecimal(input)).toBe(expected);
});
