import { defineConfig } from "oxlint";

import base from "./base.js";

export default defineConfig({
  extends: [base],
  // Enabling `plugins` overwrites oxlint's base plugin set, so list everything
  // we want here: `react` and `jsx-a11y` are opt-in for a React SPA. Plugins
  // union across `extends`, so base's import/oxc/typescript/unicorn remain
  // enabled.
  plugins: ["react", "jsx-a11y"],
  env: {
    browser: true,
  },

  rules: {
    // React 17+ doesn't require React to be in scope.
    "react/react-in-jsx-scope": "off",
    // We're happy having multiple components in a single file.
    "react/no-multi-comp": "off",
    "react/jsx-filename-extension": ["error", { extensions: [".jsx", ".tsx"] }],
    // The demo intentionally renders literal JSX text.
    "react/jsx-no-literals": "off",
    // `document.getElementById("root")` is the documented createRoot idiom.
    "unicorn/prefer-query-selector": "off",
    // Arrow-shorthand state setters returning `void` are idiomatic React.
    "typescript/no-confusing-void-expression": "off",
    // Our own components legitimately take `className`/`style` props.
    // Has a `check-allows-*` fixture in `test/react-fodder`.
    "react/forbid-component-props": "off",
  },
});
