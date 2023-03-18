import { doNotExecute, Equal, Expect } from "./utils";

doNotExecute(() => {
  const maybeNum = 1 as unknown;

  if (Number.isFinite(maybeNum)) {
    type tests = [Expect<Equal<typeof maybeNum, number>>];
  }
});