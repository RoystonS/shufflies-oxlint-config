// `eslint/prefer-destructuring` is off, so plain member access is allowed.
export function nameOf(person: { name: string }): string {
  const name = person.name;
  return name;
}
