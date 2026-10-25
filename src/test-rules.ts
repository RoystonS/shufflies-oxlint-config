import type { OxlintConfig } from "oxlint";

export const testRules = {
  "eslint/max-lines-per-function": "off",
  "typescript/no-floating-promises": "off",
} satisfies NonNullable<OxlintConfig["rules"]>;
