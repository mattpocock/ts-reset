import { doNotExecute, Equal, Expect } from "./utils";

doNotExecute(() => {
  const result = new Date().getDay();

  type tests = [Expect<Equal<typeof result, 0 | 1 | 2 | 3 | 4 | 5 | 6>>];
});
