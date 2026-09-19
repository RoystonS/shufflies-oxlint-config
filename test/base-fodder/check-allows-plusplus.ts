// `eslint/no-plusplus` is off, so `++` is allowed.
export function increment(value: number): number {
  let counter = value;
  counter++;
  return counter;
}
