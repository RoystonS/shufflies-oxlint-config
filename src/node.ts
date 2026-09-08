import { defineConfig } from "oxlint";

import base from "./base.js";

export default defineConfig({
  extends: [base],
  // Enabling `plugins` overwrites oxlint's base plugin set, so list everything
  // we want here: `node` is opt-in for Node.js apps. Plugins union across
  // `extends`, so base's import/oxc/typescript/unicorn remain enabled.
  plugins: ["node"],
  env: {
    node: true,
  },
});
