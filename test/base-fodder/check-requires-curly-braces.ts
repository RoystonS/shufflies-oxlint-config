// `curly` is configured as `all`, so even single-line blocks must use braces.
export class Fodder {
  private value = 0;
  private readonly max = 10;
  public increment() {
    // oxlint-disable-next-line curly
    if (this.value < this.max) this.value++;
  }
}
