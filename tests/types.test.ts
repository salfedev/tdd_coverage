import { it, expect } from "bun:test";

import { config } from "../src/config";

it('config should be an object', () => {
  expect(config).toBeObject();
  expect(config).toContainKey('port');
  expect(config).toContainKey('host');
  expect(config.port).toBeNumber();
  expect(config.host).toBeString();
  expect(config.timestamp).toBeDate();
});