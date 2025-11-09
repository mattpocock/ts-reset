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

doNotExecute(() => {
  const arr: string[] | number[] = {} as any;

  const result = arr.filter((x) => typeof x === "string");

  type tests = [Expect<Equal<typeof result, string[]>>];
});

doNotExecute(() => {
  const arrOk: { key: string }[] = [{ key: "val" }];
  const arrBad: {}[] = [{}];

  // Look ma, no error!
  ((): { key: string }[] => {
    return arrOk.filter(Boolean);
  })();
  ((): { key: string }[] => {
    const result = arrOk.filter(Boolean);
    return result;
  })();

  // Look ma, proper errors!
  ((): { key: string }[] => {
    // @ts-expect-error
    return arrBad.filter(Boolean);
  })();
  ((): { key: string }[] => {
    const result = arrBad.filter(Boolean);
    // @ts-expect-error
    return result;
  })();
});

doNotExecute(() => {
  const arrOk: readonly { key: string }[] = [{ key: "val" }];
  const arrBad: readonly {}[] = [{}];

  // Look ma, no error!
  ((): { key: string }[] => {
    return arrOk.filter(Boolean);
  })();
  ((): { key: string }[] => {
    const result = arrOk.filter(Boolean);
    return result;
  })();

  // Look ma, proper errors!
  ((): { key: string }[] => {
    // @ts-expect-error
    return arrBad.filter(Boolean);
  })();
  ((): { key: string }[] => {
    const result = arrBad.filter(Boolean);
    // @ts-expect-error
    return result;
  })();
});
