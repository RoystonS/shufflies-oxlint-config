import { reference } from "./utils";

const someFunction = (value1: number, value2: string, value3: boolean | undefined) => {
  reference(value1, value2, value3);
};

someFunction(1, "test", undefined);

export { someFunction };
