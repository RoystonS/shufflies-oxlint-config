import { createRequire } from "node:module";

import { defineConfig } from "oxlint";

import config, { testRules } from "../lib/esm/index.js";

const require = createRequire(import.meta.url);
let smartassAvailable = true;

try {
  require.resolve("@kensio/smartass/oxlint");
} catch {
  smartassAvailable = false;
}

const rules = { ...testRules };

if (!smartassAvailable) {
  delete rules["smartass/prefer-specific-assertions"];
}

export default defineConfig({
  extends: [config],
  ...(smartassAvailable && {
    jsPlugins: [{ name: "smartass", specifier: "@kensio/smartass/oxlint" }],
  }),
  ...(!smartassAvailable && {
    ignorePatterns: [
      "test-rules-fodder/check-allows-specific-assertion.ts",
      "test-rules-fodder/check-prohibits-general-assertion.ts",
    ],
  }),
  overrides: [
    {
      files: ["**/test-rules-fodder/**"],
      rules,
    },
  ],
  options: {
    typeAware: true,
  },
});
