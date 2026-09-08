import { defineConfig } from "oxlint";

export default defineConfig({
  // Enabling `plugins` overwrites oxlint's base plugin set, so list everything
  // we want: `eslint` core rules are always on regardless, `typescript`,
  // `unicorn` and `oxc` are enabled by default, and `import` is opt-in.
  plugins: ["import", "oxc", "typescript", "unicorn"],

  categories: {
    correctness: "error",
    suspicious: "warn",
    perf: "warn",
    pedantic: "warn",
    style: "warn",
    restriction: "warn",

    // No experimental rules by default
    nursery: "off",
  },

  rules: {
    // ---- Imports & exports ------------------------------------------------
    // ✅ Prefer and autofix to `import type`.
    "typescript/consistent-type-imports": [
      "error",
      {
        disallowTypeAnnotations: false,
        prefer: "type-imports",
      },
    ],
    // We prefer named exports to default exports.
    "import/no-default-export": "warn",
    "import/no-named-export": "off",
    "import/prefer-default-export": "off",
    // We should be allowed to import a module twice if one is a type import and
    // the other is a regular import.
    "eslint/no-duplicate-imports": ["error", { allowSeparateTypeImports: true }],
    // Largely duplicates `eslint/no-duplicate-imports`, so disable it.
    "import/no-duplicates": "off",
    // `import "./index.css"` side-effect imports are idiomatic in Vite.
    "import/no-unassigned-import": "off",
    // We don't need to prohibit "node:*" imports.
    "import/no-nodejs-modules": "off",

    // ---- Functions ---------------------------------------------------------
    // We're happy mixing function statements and function expressions.
    "eslint/func-style": "off",
    // There's no need to force arrow functions to have a full block body, and
    // no need to prohibit them either. Both are useful.
    "eslint/arrow-body-style": "off",
    // Return types are left to inference; matches `eslint/func-style: "off"`.
    "typescript/explicit-function-return-type": "off",
    "typescript/explicit-module-boundary-types": "off",

    // ---- Types & classes ---------------------------------------------------
    "typescript/explicit-member-accessibility": "error",
    "typescript/no-empty-object-type": "off",
    // Destructured props objects are never mutated.
    "typescript/prefer-readonly-parameter-types": "off",

    // ---- Variables & values ------------------------------------------------
    // oxlint's TypeScript-aware no-unused-vars lives under the `eslint` plugin
    // rather than `typescript`.
    "eslint/no-unused-vars": [
      "error",
      {
        args: "all",
        argsIgnorePattern: "^_",
        caughtErrors: "all",
        caughtErrorsIgnorePattern: "^_",
        destructuredArrayIgnorePattern: "^_",
        ignoreRestSiblings: true,
        varsIgnorePattern: "^_",
      },
    ],
    // We don't need to force all nearby variables into a single const/let.
    "eslint/one-var": "off",
    // Don't prohibit use of `undefined`.
    "eslint/no-undefined": "off",
    "unicorn/no-useless-undefined": "off",

    // ---- Operators & literals ----------------------------------------------
    // Don't prohibit ternary operators, even if nested.
    "eslint/no-ternary": "off",
    "eslint/no-nested-ternary": "off",
    "unicorn/no-nested-ternary": "off",
    "eslint/no-magic-numbers": ["error", { ignore: [0, 1, -1] }],
    // There is no need to _prohibit_ zero fractions. [0.6, 0.8, 1.0, 1.2] is
    // perfectly reasonable.
    "unicorn/no-zero-fractions": "off",

    // ---- Naming ------------------------------------------------------------
    "unicorn/filename-case": "off",
    // Whilst prohibiting dangling underscores is a good idea, we do allow them
    // in function parameters as that's useful for indicating unused parameters.
    "no-underscore-dangle": ["error", { allowFunctionParams: true }],

    // ---- Stylistic ---------------------------------------------------------
    // oxfmt will split empty braces onto their own lines, so we can't have a
    // rule that insists on no spaces inside empty braces.
    "unicorn/empty-brace-spaces": "off",
    "eslint/capitalized-comments": ["error", "always", { ignoreConsecutiveComments: true }],
  },

  options: {
    typeAware: true,
  },
});
