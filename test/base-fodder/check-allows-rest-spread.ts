// `oxc/no-rest-spread-properties` is off, so object spread is allowed.
export function withExtra(original: { a: number }, extra: { b: number }): { a: number; b: number } {
  return { ...original, ...extra };
}
