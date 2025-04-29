const {sum, minus} = require('../src/sum.js');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
  expect(minus(1, 2)).toBe(-1);
})