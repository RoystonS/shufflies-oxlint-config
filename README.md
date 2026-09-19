# @shufflies/oxlint-config

This probably isn't a useful package for you.
It's my own personal set of reusable [oxlint](https://oxc.rs/docs/guide/usage/linter/) configurations.

## Installation

Install the package:

```shell
npm install -D @shufflies/oxlint-config
```

## Usage

The package provides three presets, each a config object to pass to `extends`:

| Export                    | Purpose                                                                            |
| ------------------------- | ---------------------------------------------------------------------------------- |
| `base` (also the default) | Neutral TypeScript rules — for any non-UI, non-Node-specific project               |
| `react`                   | Adds the `react` + `jsx-a11y` plugins and React-specific overrides for a React SPA |
| `node`                    | Adds the `node` plugin and Node.js environment globals for a Node.js app           |

The presets are layered: `react` and `node` both extend `base`, so there's no duplication and you only need to extend the one that fits your project.

For a neutral TypeScript project:

```ts
import { defineConfig } from "oxlint";

import config from "@shufflies/oxlint-config";

export default defineConfig({
  extends: [config],
});
```

For a React SPA:

```ts
import { defineConfig } from "oxlint";

import { react } from "@shufflies/oxlint-config";

export default defineConfig({
  extends: [react],
});
```

For a Node.js app:

```ts
import { defineConfig } from "oxlint";

import { node } from "@shufflies/oxlint-config";

export default defineConfig({
  extends: [node],
});
```

The presets enable the plugins they need (`react` + `jsx-a11y`, or `node`, on top of `base`'s `import`/`oxc`/`typescript`/`unicorn`), so you don't need to set `plugins` yourself. Note that ESLint core rules are always enabled regardless of the plugin list.

Then run the linter:

```shell
npx oxlint
```

## Contributing

See [AGENTS.md](./AGENTS.md) for the fixture and test conventions this repo uses.
