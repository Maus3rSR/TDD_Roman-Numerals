import { test, expect } from 'vitest';

function romanianToDecimal(romanian: string): number {
  let finalNumber = 0;

  if (romanian[0] === 'I') {
    finalNumber = 1;
  }

  if (romanian[1] === 'I') {
    finalNumber = 2;
  }

  if (romanian[2] === 'I') {
    finalNumber = 3;
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
