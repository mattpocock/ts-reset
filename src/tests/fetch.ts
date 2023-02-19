import { doNotExecute, Equal, Expect } from "./utils";

doNotExecute(async () => {
  const result = await fetch("/").then((res) => res.json());

  type tests = [Expect<Equal<typeof result, unknown>>];
});
