import { test, expect } from 'vitest';

function romanianToDecimal(romanian: string): number {
  let finalNumber = 0;
  let previousLetter: string = '';
  let index = 0;

  while (romanian[index]) {
    const c = romanian[index];
    if (c === 'V' && previousLetter === 'I') {
      finalNumber += 3;
    } else if (c === 'V') {
      finalNumber += 5;
    } else {
      finalNumber += 1;
    }

    previousLetter = c;
    index++;
  }

  return finalNumber;
}

test.each([
  ['I', 1],
  ['II', 2],
  ['III', 3],
  ['V', 5],
  ['IV', 4],
])('%s should give %s', (input, expected) => {
  expect(romanianToDecimal(input)).toBe(expected);
});
