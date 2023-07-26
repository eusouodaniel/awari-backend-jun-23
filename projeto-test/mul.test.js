const { mul } = require('./sum');

test('1 * 2 é igual a 2', () => {
  expect(mul(1, 2)).toBe(2);
});