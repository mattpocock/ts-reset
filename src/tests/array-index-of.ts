import { doNotExecute, Equal, Expect } from "./utils";

doNotExecute(async () => {
  const arr = ["1", "2", "3"] as const;

  // Look ma, no error!
  arr.indexOf("4");

  // Look ma, proper errors!
  arr.indexOf(
    // @ts-expect-error
    2,
  );
  arr.indexOf(
    // @ts-expect-error
    true,
  );
});

doNotExecute(async () => {
  const arr = [1, 2, 3] as const;

  arr.indexOf(4);
  arr.indexOf(
    // @ts-expect-error
    true,
  );
  arr.indexOf(
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

  arr.indexOf(
    // @ts-expect-error
    4,
  );

  arr.indexOf({ a: 1 });
});

doNotExecute(async () => {
  const arr: Array<"1" | "2" | "3"> = ["1", "2", "3"];

  arr.indexOf("4");

  arr.indexOf(
    // @ts-expect-error
    2,
  );
  arr.indexOf(
    // @ts-expect-error
    true,
  );
});

// lastIndexOf

doNotExecute(async () => {
  const arr = ["1", "2", "3"] as const;

  // Look ma, no error!
  arr.lastIndexOf("4");

  // Look ma, proper errors!
  arr.lastIndexOf(
    // @ts-expect-error
    2,
  );
  arr.lastIndexOf(
    // @ts-expect-error
    true,
  );
});

doNotExecute(async () => {
  const arr = [1, 2, 3] as const;

  arr.lastIndexOf(4);
  arr.lastIndexOf(
    // @ts-expect-error
    true,
  );
  arr.lastIndexOf(
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

  arr.lastIndexOf(
    // @ts-expect-error
    4,
  );

  arr.lastIndexOf({ a: 1 });
});

doNotExecute(async () => {
  const arr: Array<"1" | "2" | "3"> = ["1", "2", "3"];

  arr.lastIndexOf("4");

  arr.lastIndexOf(
    // @ts-expect-error
    2,
  );
  arr.lastIndexOf(
    // @ts-expect-error
    true,
  );
});
