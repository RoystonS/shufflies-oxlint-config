// `eslint/no-void` allows `void` used as a statement, so discarding a promise's
// result in this way is allowed.
export function fireAndForget(source: Promise<number>, onResult: (value: number) => void): void {
  void source.then(onResult);
}
