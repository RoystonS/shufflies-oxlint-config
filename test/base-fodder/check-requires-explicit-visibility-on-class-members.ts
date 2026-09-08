import { nonEmptyFunction } from "./utils";

export class MyClass {
  public goodPublicProperty = "X";
  private goodPrivateProperty = "X";

  // oxlint-disable-next-line typescript/explicit-member-accessibility
  badPropertyWithoutVisibility = "X";

  public goodPublicMethod() {
    // Read + write all properties to ensure they're used
    this.goodPublicProperty = this.goodPrivateProperty;
    this.goodPrivateProperty = this.badPropertyWithoutVisibility;
    this.badPropertyWithoutVisibility = this.goodPublicProperty;

    MyClass.goodPrivateMethod();
    MyClass.badMethodWithoutVisibility();
  }

  private static goodPrivateMethod() {
    nonEmptyFunction();
  }

  // oxlint-disable-next-line typescript/explicit-member-accessibility
  static badMethodWithoutVisibility() {
    nonEmptyFunction();
  }
}
