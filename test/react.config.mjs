import { defineConfig } from "oxlint";

import { react } from "../lib/esm/index.js";

export default defineConfig({
  extends: [react],
  // The react fixtures are plain .jsx files without type information, so turn
  // off type-aware checking here (it's already covered by the base fixtures).
  options: {
    typeAware: false,
  },
});
