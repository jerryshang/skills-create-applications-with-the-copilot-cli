const calc = require('../lib/calculator');

describe('Calculator library - basic operations', () => {
  test('addition: 2 + 3 = 5', () => {
    expect(calc.add(2, 3)).toBe(5);
  });

  test('subtraction: 10 - 4 = 6', () => {
    expect(calc.subtract(10, 4)).toBe(6);
  });

  test('multiplication: 45 * 2 = 90', () => {
    expect(calc.multiply(45, 2)).toBe(90);
  });

  test('division: 20 / 5 = 4', () => {
    expect(calc.divide(20, 5)).toBe(4);
  });

  test('division by zero throws', () => {
    expect(() => calc.divide(1, 0)).toThrow('division by zero');
  });

  test('works with floats', () => {
    expect(calc.add(1.5, 2.25)).toBeCloseTo(3.75);
    expect(calc.divide(5, 2)).toBeCloseTo(2.5);
  });
});
