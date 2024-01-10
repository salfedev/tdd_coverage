import { it, expect, describe } from "bun:test";

import { multiply } from "../src/index";

describe('multiply', () => {
  // test cases and setup
  const scenarios = [
    [2, 3, 6],    // 2*3 = 6
    [4, 5, 20],   // 4*5 = 20
    [0, 1, 0],    // 0*1 = 0
    [-2, 3, -6],  // -2*3 = -6
  ]

  // tests loop
  for (let testCase in scenarios) {
    const [a, b, expected] = scenarios[testCase];
    it(`multiply(${a}, ${b}) should return ${expected}`, () => {
      expect(multiply(a, b)).toBe(expected);
    });
  }
});