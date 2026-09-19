# Agent & contributor guide

This repo publishes oxlint presets (`base`, `react`, `node`) together with a
fixture-based test suite that pins what those presets do. Most changes here are
"flip a rule, add a fixture", so the conventions below matter more than the code.

## Commands

| Command                                   | Purpose                                  |
| ----------------------------------------- | ---------------------------------------- |
| `npm test`                                | Builds (`pretest`), then runs all suites |
| `npm run test:base` (`:react`, `:node`)   | Runs a single suite                      |
| `npm run format` / `npm run format:check` | oxfmt; CI runs `format:check`            |

## How the tests work

Each suite lints a fodder directory with two flags that together check _both_
directions:

```sh
oxlint test/base-fodder --config test/base.config.mjs \
  --report-unused-disable-directives-severity error --max-warnings=0
```

- `--max-warnings=0` means any finding fails the suite. An **allows** fixture
  therefore carries no directive: it passes only if the rule genuinely does _not_
  fire.
- `--report-unused-disable-directives-severity error` means a directive that
  suppresses nothing fails the suite. A **prohibits** fixture therefore carries an
  `oxlint-disable-next-line`: it passes only if the rule genuinely _does_ fire.

The suites import the preset from `lib/`, so `npm test` builds first via `pretest`.

## Fixture naming

- `check-allows-<thing>.<ext>` — the pattern must **not** be reported.
- `check-prohibits-<thing>.<ext>` — the pattern **must** be reported; add a
  directive.
- `check-requires-<thing>.<ext>` — like prohibits, for a rule that _demands_
  something.
- Anything else (e.g. `utils.ts`, `type-exports.ts`) is a shared helper module.

## Fixture comments: open with the rule

**Every fixture must open with a comment that names the rule and its
configuration**, so the file explains itself. Lead with the rule name in backticks,
state the configuration, then the consequence:

```ts
// `eslint/no-plusplus` is off, so `++` is allowed.
// `oxc/no-async-await` is off, so `async`/`await` is allowed.
```

For a rule that is _relaxed_ rather than off, say what the configuration permits:

```ts
// `eslint/no-void` allows `void` used as a statement, so discarding a promise's result in this way is allowed.
// `typescript/switch-exhaustiveness-check` counts a `default` as covering the union, so this switch is allowed.
// `import/no-default-export` is off for `oxlint.config.ts`, so this lint config module may default-export.
```

A `check-prohibits-*` fixture uses the parallel "still reports" form:

```ts
// `eslint/no-void` still reports `void` used as an expression rather than a statement.
// oxlint-disable-next-line eslint/no-void
export const discarded = void 0;
```

Keep it to one to three lines, and add a parenthetical only when it explains
something a reader would otherwise question (e.g. why the `else` branch holds two
statements).

## Fixtures are linted by the whole preset

Every fixture is checked against _all_ the preset's rules, not just the one it is
about. Keep each one minimal and otherwise clean — `type="button"` on a `<button>`,
braces in `switch` cases, no unused locals — or an unrelated rule will fail the
suite.

## Adding a fixture

1. Make the preset change in `src/`.
2. Add the fixture, following the naming and comment conventions above.
3. Run `npm test`; it should be green.
4. **Prove the fixture actually guards the rule.** A green suite only shows the
   rules are off. Use a scratch config that re-creates the un-relaxed default and
   confirm the fixture now reports, then delete the scratch config.

## Gotchas

- **Overriding a rule's severity keeps the extended options.** Setting
  `"some/rule": "warn"` in a consuming config does _not_ drop the preset's options;
  to simulate the un-relaxed default, spell the options out (e.g.
  `["warn", "prefer-inline"]`).
- **Override globs must be glob-shaped.** `files: ["**/oxlint.config.ts"]` matches; a
  bare `files: ["oxlint.config.ts"]` silently matches nothing.
- **`oxlint-disable-next-line` does not stack.** Two stacked directives do not both
  apply — the first is reported as an unused directive. Combine them on one line:
  `// oxlint-disable-next-line rule/one, rule/two`.
- **A fixture may be named `oxlint.config.ts`.** Passing `--config` disables nested
  config lookup, so it is not loaded as a config.
- **Don't commit scratch verification configs.**
- **Run `npm run format` before committing**; CI runs `npm run format:check`.
