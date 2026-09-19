// `eslint/no-multi-assign` ignores chained assignments outside a declaration, so
// this statement form is allowed.
export function emptyPair(): [number, number] {
  const pair: [number, number] = [0, 0];
  pair[0] = pair[1] = 0;
  return pair;
}
