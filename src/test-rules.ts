import type { OxlintConfig } from "oxlint";

export const testRules = {
  "eslint/max-lines-per-function": "allow",
  "typescript/no-floating-promises": "allow",
  "smartass/prefer-specific-assertions": "warn",
} satisfies NonNullable<OxlintConfig["rules"]>;
