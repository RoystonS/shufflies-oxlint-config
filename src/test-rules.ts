import type { OxlintConfig } from "oxlint";

export const testRules = {
  "eslint/max-lines-per-function": "off",
  "typescript/no-floating-promises": "off",
  "smartass/prefer-specific-assertions": "warn",
} satisfies NonNullable<OxlintConfig["rules"]>;
