// `oxc/no-optional-chaining` is off, so `?.` is allowed.
export function nameOf(value?: { name?: string }): string {
  return value?.name ?? "unknown";
}
