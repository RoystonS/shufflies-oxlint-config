// Node globals such as `process` are provided by the node environment, so
// there should be no `no-undef` report here.
export function currentDirectory() {
  return process.cwd();
}
