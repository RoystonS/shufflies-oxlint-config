// `eslint/no-else-return` is off, so an explicit `else` after a `return` is allowed.
// (The `else` branch deliberately holds two statements so that
// `unicorn/prefer-ternary` has nothing to say about it.)
export function classify(value: number): string {
  if (value > 0) {
    return "positive";
  } else {
    const label = "non-positive";
    return label;
  }
}
