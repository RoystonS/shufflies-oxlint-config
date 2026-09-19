// `import/exports-last` is off, so an export may be followed by other code.
export const prefix = "v";

const separator = "/";

export function tagged(name: string): string {
  return `${prefix}${separator}${name}`;
}
