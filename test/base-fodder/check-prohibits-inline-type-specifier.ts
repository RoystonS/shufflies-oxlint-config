// `import/consistent-type-specifier-style` still reports an inline `type` specifier
// when every specifier is a type. (`typescript/no-import-type-side-effects` targets
// that same anti-pattern, hence the shared directive.)
// oxlint-disable-next-line import/consistent-type-specifier-style, typescript/no-import-type-side-effects
import { type Colour } from "./type-exports";

export function isCool(colour: Colour): boolean {
  return colour === "blue";
}
