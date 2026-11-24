import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import { describe, expect, it } from "vitest";

import { testRules } from "../lib/esm/index.js";

const repositoryRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const oxlintBinary = resolve(repositoryRoot, "node_modules/oxlint/bin/oxlint");

const configurations = [
  ["base", "lib/esm/base.js"],
  ["react", "lib/esm/react.js"],
  ["node", "lib/esm/node.js"],
  ["testRules", "test/test-rules.config.mjs"],
];

// Snapshot the resolved presets. The fodder suites continue to test how
// filename-specific overrides behave on actual files.
describe("Effective Configuration Regression Tests", () => {
  it.each(configurations)("should maintain the effective %s configuration", async (name, configPath) => {
    const output = execFileSync(process.execPath, [oxlintBinary, "--print-config", "--config", configPath], {
      cwd: repositoryRoot,
      encoding: "utf8",
    });
    const effectiveConfig = JSON.parse(output);

    await expect(effectiveConfig).toMatchFileSnapshot(`__snapshots__/${name}-config.json`);
  });

  it("should retain the JS plugin rule omitted from oxlint's printed configuration", async () => {
    await expect({
      "smartass/prefer-specific-assertions": testRules["smartass/prefer-specific-assertions"],
    }).toMatchFileSnapshot("__snapshots__/testRules-js-plugin-config.json");
  });
});
