// `import/no-relative-parent-imports` is off, so `../` imports are allowed.
import { nonEmptyFunction } from "../utils";

export function callHelper(): void {
  nonEmptyFunction();
}
