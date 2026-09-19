// `typescript/consistent-return` is off, so a function may return a value on one
// path and fall through to `undefined` on another.
export function maybeValue(flag: boolean): number | undefined {
  if (flag) {
    return 1;
  }
}
