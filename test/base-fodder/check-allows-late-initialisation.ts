// `eslint/init-declarations` is off, so we may declare a variable and assign it
// later on.
export function sum(values: number[]): number {
  let total: number;
  total = 0;

  for (const value of values) {
    total += value;
  }

  return total;
}
