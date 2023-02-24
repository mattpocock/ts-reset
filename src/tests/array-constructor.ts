import { doNotExecute, Equal, Expect } from "./utils";

doNotExecute(() => {
  const arr = new Array(1);

  type tests = [Expect<Equal<typeof arr, unknown[]>>];
});

doNotExecute(() => {
  const arr = Array(1);

  type tests = [Expect<Equal<typeof arr, unknown[]>>];
});
