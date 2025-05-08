import { test, expect } from 'vitest';

function romanianToDecimal(romanian: string): number {
  if (romanian === 'I') {
    return 1;
  }

  return 0;
}

test.each([['I', 1]])('%s should give %s', (input, expected) => {
  expect(romanianToDecimal(input)).toBe(expected);
});
