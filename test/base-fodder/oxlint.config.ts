// `import/no-default-export` is off for `oxlint.config.ts`, so this lint config module
// may default-export. It is kept as a valid, empty config so that nested config lookup
// (if ever enabled) can't misbehave.
import { defineConfig } from "oxlint";

export default defineConfig({});
