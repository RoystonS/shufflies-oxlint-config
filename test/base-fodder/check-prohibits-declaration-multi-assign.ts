// `eslint/no-multi-assign` still reports a chained assignment inside a declaration.
let counter = 0;

// oxlint-disable-next-line eslint/no-multi-assign
export const initial = (counter = 1);

export function readCounter(): number {
  return counter;
}
