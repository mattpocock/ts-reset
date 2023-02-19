import { doNotExecute, Equal, Expect } from "./utils";

doNotExecute(() => {
  const arr = [1, 2, 3, undefined];

  const result = arr.filter(Boolean);

  type tests = [Expect<Equal<typeof result, number[]>>];
});
