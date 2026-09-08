const testMethod = (condition: boolean): string =>
  condition ? "Condition is true" : "Condition is false";

const revcmp = (value1: number, value2: number): number =>
  // We want to be able to use simple non-bracketed syntax here
  value1 < value2 ? 1 : value1 === value2 ? 0 : -1;

export { revcmp, testMethod };
