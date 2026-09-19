// `eslint/no-use-before-define` is off, so a helper may be defined below the
// function that calls it.
export function greeting(name: string): string {
  return decorate(name);
}

function decorate(name: string): string {
  return `Hello ${name}`;
}
