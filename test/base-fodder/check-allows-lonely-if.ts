// `eslint/no-lonely-if` and `unicorn/no-lonely-if` are off, so both of these
// shapes are allowed: an `if` as the only statement in an `else` block, and an
// `if` as the only statement in an `if` block.
export function classify(value: number): string {
  if (value > 10) {
    return "large";
  } else {
    if (value > 0) {
      return "positive";
    }
  }
  return "non-positive";
}

export function describe(value: number): string {
  if (value > 0) {
    if (value > 100) {
      return "huge";
    }
  }
  return "small";
}
