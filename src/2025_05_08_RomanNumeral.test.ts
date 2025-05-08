import { test, expect } from 'vitest';

function romanianToDecimal(romanian: string): number {
  let finalNumber = 0;
  let index = 0;

  while (romanian[index]) {
    const c = romanian[index];

    if (c === 'I' && romanian[index + 1] === 'V') {
      finalNumber += 4;
      index += 2;
    } else if (c === 'I' && romanian[index + 1] === 'X') {
      finalNumber += 9;
      index += 2;
    } else if (c === 'X') {
      finalNumber += 10;
      index++;
    } else if (c === 'V') {
      finalNumber += 5;
      index++;
    } else if (c === 'I') {
      finalNumber += 1;
      index++;
    } else {
      throw new Error('Invalid Romanian');
    }
  }

  return finalNumber;
}

test.each([
  ['I', 1],
  ['II', 2],
  ['III', 3],
  ['V', 5],
  ['IV', 4],
  ['VI', 6],
  ['VII', 7],
  ['VIII', 8],
  ['X', 10],
  ['IX', 9],
])('%s should give %s', (input, expected) => {
  expect(romanianToDecimal(input)).toBe(expected);
});
