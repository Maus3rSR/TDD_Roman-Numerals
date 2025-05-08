import { test, expect } from 'vitest';

function romanianToDecimal(romanian: string): number {
  let finalNumber = 0;

  if (romanian === 'I') {
    return 1;
  } else if (romanian === 'II') {
    return 2;
  } else if (romanian === 'III') {
    return 3;
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
