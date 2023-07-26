const { sum, sub, mul, div } = require('./sum');

test('1 + 2 é igual a 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('1 - 2 é igual a -1', () => {
  expect(sub(1, 2)).toBe(-1);
});

test('10 / 5 é igual a 2', () => {
  expect(div(10, 5)).toBe(2);
});