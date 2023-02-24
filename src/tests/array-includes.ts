import { doNotExecute, Equal, Expect } from "./utils";

doNotExecute(async () => {
  const arr = ["1", "2", "3"] as const;

  // Look ma, no error!
  arr.includes("4");

  // Look ma, proper errors!
  arr.includes(
    // @ts-expect-error
    2,
  );
  arr.includes(
    // @ts-expect-error
    true,
  );
});

doNotExecute(async () => {
  const arr = [1, 2, 3] as const;

  arr.includes(4);
  arr.includes(
    // @ts-expect-error
    true,
  );
  arr.includes(
    // @ts-expect-error
    "str",
  );
});

doNotExecute(async () => {
  const arr = [
    { a: 1 },
    {
      a: 2,
    },
    {
      a: 3,
    },
  ] as const;

  arr.includes(
    // @ts-expect-error
    4,
  );

  arr.includes({ a: 1 });
});

doNotExecute(async () => {
  let arr = [1, 2, 3] as const;

  let member = 1;
  if (arr.includes(member)) {
    type tests = [Expect<Equal<typeof member, 1 | 2 | 3>>];
  }
});

doNotExecute(async () => {
  /**
   * type narrowing for numbers in readonly array
   */
  let arr = [1, 2, 3] as const;

  let member = 1 as 1 | 2 | 4;
  if (arr.includes(member)) {
    type tests = [Expect<Equal<typeof member, 1 | 2>>];
  }
});

doNotExecute(async () => {
  /**
   * type narrowing for objects in readonly array
   */
  const arr = [{ a: 1 }, { a: 2 }, { a: 3 }] as const;

  arr.includes(
    // @ts-expect-error
    4,
  );

  let member = { a: 1 } as const;
  if (arr.includes(member)) {
    type tests = [Expect<Equal<typeof member, { a: 1 }>>];
  }
});

doNotExecute(async () => {
  /**
   * type narrowing for objects in writable array
   */
  let arr: Array<1 | 2 | 3> = [1, 2, 3];

  let member = 1 as 1 | 2 | 4;
  if (arr.includes(member)) {
    type tests = [Expect<Equal<typeof member, 1 | 2>>];
  }
});

doNotExecute(async () => {
  const arr: Array<"1" | "2" | "3"> = ["1", "2", "3"];

  arr.includes("4");

  arr.includes(
    // @ts-expect-error
    2,
  );
  arr.includes(
    // @ts-expect-error
    true,
  );
});

doNotExecute(async () => {
  const arr: Array<1 | 2 | 3> = [1, 2, 3];

  let member = 4 as 3 | 4;
  if (arr.includes(member)) {
    type tests = [Expect<Equal<typeof member, 3 | 4>>];
  }
});
