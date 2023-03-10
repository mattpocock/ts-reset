import { doNotExecute, Equal, Expect } from "./utils";

doNotExecute(() => {
  Promise.resolve().catch((err) => {
    type tests = [Expect<Equal<typeof err, unknown>>];
  });
});
