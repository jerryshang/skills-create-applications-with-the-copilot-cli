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

  // Extended operations
  test('modulo: 5 % 2 = 1', () => {
    expect(calc.modulo(5, 2)).toBe(1);
  });

  test('modulo with negative numbers: -5 % 2 = -1', () => {
    expect(calc.modulo(-5, 2)).toBe(-1);
  });

  test('modulo by zero throws', () => {
    expect(() => calc.modulo(10, 0)).toThrow('modulo by zero');
  });

  test('power: 2 ** 3 = 8', () => {
    expect(calc.power(2, 3)).toBe(8);
  });

  test('power with negative exponent: 2 ** -2 = 0.25', () => {
    expect(calc.power(2, -2)).toBeCloseTo(0.25);
  });

  test('squareRoot: sqrt(16) = 4', () => {
    expect(calc.squareRoot(16)).toBe(4);
  });

  test('squareRoot of non-perfect square returns float', () => {
    expect(calc.squareRoot(2)).toBeCloseTo(Math.sqrt(2));
  });

  test('squareRoot of negative number throws', () => {
    expect(() => calc.squareRoot(-4)).toThrow('square root of negative number');
  });
});
