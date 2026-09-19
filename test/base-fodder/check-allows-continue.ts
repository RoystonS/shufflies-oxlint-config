// `eslint/no-continue` is off, so `continue` is allowed.
export function firstPositive(values: number[]): number | undefined {
  for (const value of values) {
    if (value <= 0) {
      continue;
    }
    return value;
  }
  return undefined;
}
