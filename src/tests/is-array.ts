import { doNotExecute, Equal, Expect } from "./utils";

doNotExecute(() => {
  const maybeArr = [1, 2, 3] as unknown;

  if (Array.isArray(maybeArr)) {
    type tests = [
      Expect<Equal<typeof maybeArr, unknown[] | readonly unknown[]>>
    ];
  }
});

doNotExecute(() => {
  const arrOrString = [] as string[] | string;

  if (Array.isArray(arrOrString)) {
    type tests = [Expect<Equal<typeof arrOrString, string[]>>];
  }
});

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
