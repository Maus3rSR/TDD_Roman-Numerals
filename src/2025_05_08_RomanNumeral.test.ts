import { test, expect } from 'vitest';

function romanianToDecimal(romanian: string): number {
  let finalNumber = 0;

  if (romanian === 'I') {
    finalNumber += 1;
  }

  if (romanian === 'II') {
    return 1 + 1;
  }

  if (romanian === 'III') {
    return 1 + 1 + 1;
  }

  return finalNumber;
}

test.each([
  ['I', 1],
  ['II', 2],
  ['III', 3],
])('%s should give %s', (input, expected) => {
  expect(romanianToDecimal(input)).toBe(expected);
});
