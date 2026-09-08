import { defineConfig } from "oxlint";

import { node } from "../lib/esm/index.js";

export default defineConfig({
  extends: [node],
  // The node fixtures are plain .mjs/.cjs files without type information, so
  // turn off type-aware checking here (it's already covered by the base
  // fixtures).
  options: {
    typeAware: false,
  },
});
