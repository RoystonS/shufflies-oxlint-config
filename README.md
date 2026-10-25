# @shufflies/oxlint-config

This probably isn't a useful package for you.
It's my own personal set of reusable [oxlint](https://oxc.rs/docs/guide/usage/linter/) configurations.

## Installation

Install the package:

```shell
npm install -D @shufflies/oxlint-config
```

## Usage

The package provides three presets to pass to `extends` and a rules fragment
for test files:

| Export                    | Purpose                                                                            |
| ------------------------- | ---------------------------------------------------------------------------------- |
| `base` (also the default) | Neutral TypeScript rules — for any non-UI, non-Node-specific project               |
| `react`                   | Adds the `react` + `jsx-a11y` plugins and React-specific overrides for a React SPA |
| `node`                    | Adds the `node` plugin and Node.js environment globals for a Node.js app           |
| `testRules`               | Rules to relax in test files, with file patterns chosen by the consumer            |

The presets are layered: `react` and `node` both extend `base`, so there's no duplication and you only need to extend the one that fits your project.

For a neutral TypeScript project:

```ts
import config from "@shufflies/oxlint-config";
import { defineConfig } from "oxlint";

export default defineConfig({
  extends: [config],
});
```

For a React SPA:

```ts
import { react } from "@shufflies/oxlint-config";
import { defineConfig } from "oxlint";

export default defineConfig({
  extends: [react],
});
```

For a Node.js app:

```ts
import { node } from "@shufflies/oxlint-config";
import { defineConfig } from "oxlint";

export default defineConfig({
  extends: [node],
});
```

The presets enable the plugins they need (`react` + `jsx-a11y`, or `node`, on top of `base`'s `import`/`oxc`/`typescript`/`unicorn`), so you don't need to set `plugins` yourself. Note that ESLint core rules are always enabled regardless of the plugin list.

Then run the linter:

```shell
npx oxlint
```

## Test files

`testRules` disables rules that are unhelpful in test files.
It only contains the rules; choose the file
patterns that identify tests in your project and apply them with an override:

```ts
import { base, testRules } from "@shufflies/oxlint-config";
import { defineConfig } from "oxlint";

export default defineConfig({
  extends: [base],
  overrides: [
    {
      files: ["src/**/*.test.ts", "src/**/*.spec.ts"],
      rules: testRules,
    },
  ],
});
```

Use `react` or `node` in `extends` instead of `base` when that preset fits your
project. The `testRules` export can be used with any of them.

## Contributing

See [AGENTS.md](./AGENTS.md) for the fixture and test conventions this repo uses.
