import { doNotExecute, Equal, Expect } from "./utils";

doNotExecute(() => {
  const set = new Set([1, 2, 3] as const);

  set.has(4);

  set.has(
    // @ts-expect-error
    "4",
  );

  set.has(
    // @ts-expect-error
    true,
  );
});
