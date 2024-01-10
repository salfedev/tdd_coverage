export function multiply(a, b) {
  return a * b;
}

export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

export function start(a, b, c) {
  return add(multiply(a, b), c) - subtract(a, b);
}