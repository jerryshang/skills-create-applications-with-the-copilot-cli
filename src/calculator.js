#!/usr/bin/env node
/**
 * CLI Calculator
 * Supported operations:
 *  - addition (add or +)
 *  - subtraction (subtract or -)
 *  - multiplication (multiply or x or *)
 *  - division (divide or /)
 *
 * Usage:
 *   node src/calculator.js <operation> <num1> <num2>
 * Examples:
 *   node src/calculator.js add 2 3      # => 5
 *   node src/calculator.js divide 10 2  # => 5
 */

const calc = require('./lib/calculator');

function parseNumber(value) {
  const n = Number(value);
  if (Number.isNaN(n)) {
    console.error(`Invalid number: ${value}`);
    process.exit(1);
  }
  return n;
}

const [, , operation, aStr, bStr] = process.argv;

if (!operation || aStr === undefined || bStr === undefined) {
  console.error('Usage: node src/calculator.js <add|subtract|multiply|divide> <num1> <num2>');
  process.exit(1);
}

const a = parseNumber(aStr);
const b = parseNumber(bStr);
let result;

try {
  switch (operation.toLowerCase()) {
    case 'add':
    case '+':
      result = calc.add(a, b);
      break;

    case 'subtract':
    case 'sub':
    case '-':
      result = calc.subtract(a, b);
      break;

    case 'multiply':
    case 'mul':
    case 'x':
    case '*':
      result = calc.multiply(a, b);
      break;

    case 'divide':
    case 'div':
    case '/':
      result = calc.divide(a, b);
      break;

    default:
      console.error(`Unknown operation: ${operation}`);
      process.exit(1);
  }
} catch (err) {
  console.error('Error:', err.message || err);
  process.exit(1);
}

// Print result
console.log(result);
