import { doNotExecute, Equal, Expect } from "./utils";

doNotExecute(async () => {
  const result = await fetch("/").then((res) => res.json());

  type tests = [Expect<Equal<typeof result, unknown>>];
});

doNotExecute(async () => {
  // Make tests fail when someone tries to PR res.json<T>

  const result = await fetch("/").then((res) => {
    // @ts-expect-error
    return res.json<string>();
  });
});
