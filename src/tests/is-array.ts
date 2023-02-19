import { doNotExecute, Equal, Expect } from "./utils";

doNotExecute(() => {
  const maybeArr = [1, 2, 3] as unknown;

  if (Array.isArray(maybeArr)) {
    type tests = [Expect<Equal<typeof maybeArr, unknown[]>>];
  }
});
