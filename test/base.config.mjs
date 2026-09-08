import { defineConfig } from "oxlint";

import config from "../lib/esm/index.js";

export default defineConfig({
  extends: [config],
});
