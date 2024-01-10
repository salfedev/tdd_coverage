import { it, expect, describe, mock } from "bun:test";

import { add, multiply, subtract, start } from '../src/index';
describe('over mocking?', () => {
  it('This test will achive a false %100 coverage', () => {
    mock(multiply).mockReturnValue(1);
    mock(add).mockReturnValue(2);
    mock(subtract).mockReturnValue(3);
    
    expect(start(1, 2, 3)).toBe(6);
  });
});
