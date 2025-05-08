import { test, expect } from 'vitest';

function romanianToDecimal(romanian: string): number {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let finalNumber = 0;
  let index = 0;

  while (romanian[index]) {
    const c = romanian[index];
    const nextC = romanian[index + 1];

    if (c !== nextC && map[c] < map[nextC] && map[nextC]) {
      finalNumber += map[nextC] - map[c];
      index += 2;
    } else if (map[c]) {
      finalNumber += map[c];
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
  ['X', 10],
  ['IX', 9],
  ['L', 50],
  ['XL', 40],
  ['C', 100],
  ['XC', 90],
  ['D', 500],
  ['CD', 400],
  ['M', 1000],
  ['CM', 900],
  ['CL', 150],
])('%s should give %s', (input, expected) => {
  expect(romanianToDecimal(input)).toBe(expected);
});
