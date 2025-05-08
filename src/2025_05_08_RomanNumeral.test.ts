import { test, expect } from 'vitest';

function romanianToDecimal(romanian: string): number {
  let finalNumber = 0;
  let i = 0;

  while (romanian[i] === 'I') {
    finalNumber += 1;
    i += 1;
  }

  if (romanian[i] === 'I') {
    finalNumber += 1;
    i += 1;
  }

  if (romanian[i] === 'I') {
    finalNumber += 1;
    i += 1;
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
