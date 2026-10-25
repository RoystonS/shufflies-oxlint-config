import { defineConfig } from "oxlint";

import config, { testRules } from "../lib/esm/index.js";

export default defineConfig({
  extends: [config],
  overrides: [
    {
      files: ["**/test-rules-fodder/**"],
      rules: testRules,
    },
  ],
  options: {
    typeAware: true,
  },
});
