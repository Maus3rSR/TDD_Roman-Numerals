import { test, expect } from 'vitest';

function romanianToDecimal(romanian: string): number {
  let finalNumber = 0;

  for (let c of romanian) {
    if (c === 'V') {
      finalNumber += 5;
    } else {
      finalNumber += 1;
    }
  }

  return finalNumber;
}

test.each([
  ['I', 1],
  ['II', 2],
  ['III', 3],
  ['V', 5],
])('%s should give %s', (input, expected) => {
  expect(romanianToDecimal(input)).toBe(expected);
});
