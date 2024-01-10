import { it, expect, describe } from "bun:test";
import { config } from '../src/config';
describe('Bad Test Examples', () => {
  it('will always pass', () => {
    expect(config).toBeDefined();
  })
  it('contains bad mock and will always pass', () => {
    const number = 1;
    expect(number).toBe(1);
  });
});
