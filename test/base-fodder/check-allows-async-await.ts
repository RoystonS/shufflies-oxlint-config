// `oxc/no-async-await` is off, so `async`/`await` is allowed.
export async function resolveValue(source: Promise<number>): Promise<number> {
  const value = await source;
  return value;
}
