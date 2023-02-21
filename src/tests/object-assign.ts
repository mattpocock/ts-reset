import { doNotExecute, Equal, Expect } from "./utils";

doNotExecute(() => {
  const obj = { a: 0, b: 1 };
  Object.assign(obj, { c: 2 }); // Typescript now knows that c is available.
  type Obj = [
    Expect<
      Equal<
        typeof obj,
        {
          a: number;
          b: number;
          c: number;
        }
      >
    >
  ];
});
