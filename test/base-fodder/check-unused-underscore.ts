export function someFunction(
  // Value1 is unused, but has an underscore prefix, so it's fine.
  _value1: number,
  // Value2 is unused, but has no underscore prefix, so it should be reported.
  // oxlint-disable-next-line eslint/no-unused-vars
  value2: string,
) {
  return 1;
}
