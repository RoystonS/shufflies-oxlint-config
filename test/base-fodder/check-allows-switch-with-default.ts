// `typescript/switch-exhaustiveness-check` counts a `default` as covering the union,
// so this switch is allowed.
import type { Colour } from "./type-exports";

export function describe(colour: Colour): string {
  switch (colour) {
    case "red": {
      return "warm";
    }
    case "green": {
      return "cool";
    }
    default: {
      return "other";
    }
  }
}
