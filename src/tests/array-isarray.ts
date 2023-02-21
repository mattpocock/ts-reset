import { doNotExecute, Equal, Expect } from "./utils";

doNotExecute(async () => {
  function makeArray<Item>(input: Item | ReadonlyArray<Item> | Array<Item>) {
    if (Array.isArray(input)) {
      return input;
    }
    return [input];
  }

  const [first] = makeArray([{ a: "1" }, { a: "2" }, { a: "3" }] as const);

  // No error!
  first.a;
});
