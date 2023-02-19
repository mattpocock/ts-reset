import { doNotExecute, Equal, Expect } from "./utils";

doNotExecute(() => {
  const result = JSON.parse("{}");

  type tests = [Expect<Equal<typeof result, unknown>>];
});
