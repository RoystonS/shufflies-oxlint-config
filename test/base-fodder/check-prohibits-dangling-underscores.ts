export class MyClass {
  private readonly _privateField: string;

  public constructor(value: string) {
    // There should be a complaint here about the dangling underscore
    // oxlint-disable-next-line no-underscore-dangle
    this._privateField = value;
  }

  // There should be no complaint here about the dangling underscore in the parameter name
  public static square(value1: number, _value2: number) {
    return value1;
  }
}
