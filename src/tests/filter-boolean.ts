import { doNotExecute, Equal, Expect } from "./utils";

doNotExecute(() => {
  const arr = [1, 2, 3, undefined];

  const result = arr.filter(Boolean);

  type tests = [Expect<Equal<typeof result, number[]>>];
});

doNotExecute(() => {
  const arr = ["1", "2", undefined] as const;

  const result = arr.filter(Boolean);

  type tests = [Expect<Equal<typeof result, ("1" | "2")[]>>];
});

doNotExecute(() => {
  const arr = [0, null, undefined, false, ""] as const;

  const result = arr.filter(Boolean);

  type tests = [Expect<Equal<typeof result, never[]>>];
});

doNotExecute(() => {
  const arr: (0 | null | undefined | false | "" | 0n)[] = [
    0,
    null,
    undefined,
    false,
    "",
    0n,
  ];

  const result = arr.filter(Boolean);

  type tests = [Expect<Equal<typeof result, never[]>>];
});
