// `typescript/no-floating-promises` is off in test files, so an unawaited promise is allowed.
export function testWithFloatingPromise() {
  Promise.resolve();
}
