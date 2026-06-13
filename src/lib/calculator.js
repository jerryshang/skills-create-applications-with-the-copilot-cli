// Calculator library exposing basic arithmetic functions
// Supported operations (exported): add, subtract, multiply, divide

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('division by zero');
  }
  return a / b;
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
};
