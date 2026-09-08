import { nonEmptyFunction } from "./utils";

const value = 1 / 1;

// oxlint-disable-next-line eqeqeq
if (value == 1) {
  nonEmptyFunction();
}

export { value };
