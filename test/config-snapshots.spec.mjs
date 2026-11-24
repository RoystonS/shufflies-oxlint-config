import { defineConfig } from "oxlint";
import { describe, it, expect } from "vitest";

import { base, react, node, testRules } from "../lib/esm/index.js";

describe("Configuration Regression Tests", () => {
  it("should maintain base configuration consistency", async () => {
    await expect(base).toMatchFileSnapshot("__snapshots__/base-config.json");
  });

  it("should maintain react configuration consistency", async () => {
    await expect(react).toMatchFileSnapshot("__snapshots__/react-config.json");
  });

  it("should maintain node configuration consistency", async () => {
    await expect(node).toMatchFileSnapshot("__snapshots__/node-config.json");
  });

  it("should maintain test rules configuration consistency", async () => {
    await expect(testRules).toMatchFileSnapshot("__snapshots__/testRules-config.json");
  });
});
