// `import/consistent-type-specifier-style` wants a top-level `import type` when every
// specifier is a type, so this form is allowed.
import type { Colour } from "./type-exports";

export function isWarm(colour: Colour): boolean {
  return colour === "red";
}
