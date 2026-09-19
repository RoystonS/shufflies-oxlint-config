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
    // Don't check import declaration order; we use oxfmt as it's more flexible
    "eslint/sort-imports": ["error", { ignoreDeclarationSort: true, ignoreCase: true }],

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

    // It's better to group object keys logically than rigorously alphabetical
    "eslint/sort-keys": "off",

    // ---- Opt-outs ----------------------------------------------------------
    // The categories above switch on every rule in `style`, `pedantic` and
    // `restriction`, which drags in a lot of opinionated, off-by-default rules.
    // Rather than have every project re-litigate the same ones, we trialled them
    // here and turned the noisy ones off, once. Grouped by their category.
    // Each of these has a `check-allows-*` fixture in `test/base-fodder`.

    // restriction
    "eslint/no-plusplus": "off", // `i++` is idiomatic
    "eslint/no-use-before-define": "off", // helpers read better after their caller
    "import/no-relative-parent-imports": "off", // `../` is fine
    "oxc/no-async-await": "off", // async/await is the modern idiom; this bans it outright
    "oxc/no-optional-chaining": "off", // `a?.b` beats manual guards
    "oxc/no-rest-spread-properties": "off", // object spread is idiomatic

    // style
    "eslint/capitalized-comments": "off", // ASCII diagrams and commented-out code are fine
    "eslint/id-length": "off", // x/y/i are idiomatic in geometry and maths
    "eslint/init-declarations": "off", // we often assign in a later branch or loop
    "eslint/no-continue": "off", // `continue` says "skip this item" clearly
    "eslint/no-magic-numbers": "off", // pervasive in geometry, typography and config
    "eslint/prefer-destructuring": "off", // not always clearer than member access
    "import/exports-last": "off", // exports don't have to sit at the bottom
    "import/group-exports": "off", // exports are grouped per component/module
    "typescript/consistent-type-definitions": "off", // `type` and `interface` each have uses
    "typescript/no-empty-interface": "off", // useful for extension/declaration merging

    // pedantic
    "eslint/no-else-return": "off", // an explicit `else` makes the either/or clearer
    "eslint/no-inline-comments": "off", // inline comments are useful
    "eslint/no-lonely-if": "off", // explicit blocks make the alternative paths clearer
    "unicorn/no-lonely-if": "off", // same intent; this plugin's take targets a different shape
    "eslint/no-warning-comments": "off", // TODO/FIXME notes are useful

    // suspicious
    "typescript/consistent-return": "off", // doesn't understand `assertNever`; tsc covers it
  },

  options: {
    typeAware: true,
  },
});
