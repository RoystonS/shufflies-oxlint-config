// `typescript/switch-exhaustiveness-check` still reports a switch that misses a union
// member, and `eslint/default-case` reports the absent `default`.
import type { Colour } from "./type-exports";

export function describe(colour: Colour): string {
  // oxlint-disable-next-line eslint/default-case, typescript/switch-exhaustiveness-check
  switch (colour) {
    case "red": {
      return "warm";
    }
    case "green": {
      return "cool";
    }
  }
  return "other";
}
