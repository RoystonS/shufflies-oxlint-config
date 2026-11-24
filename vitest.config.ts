import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "node",
    include: ["test/**/*.spec.mjs", "test/**/*.spec.ts"],
    reporters: ["default", "verbose"],
  },
});
