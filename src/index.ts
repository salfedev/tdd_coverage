export function multiply(a: number, b: number): number {
  return a * b;
}

export function add(a: number, b: number): number  {
  return a + b;
}

export function subtract(a: number, b: number): number  {
  return a - b;
}

export function start(a: number, b: number, c: number): number  {
  return add(multiply(a, b), c) - subtract(a, b);
}
