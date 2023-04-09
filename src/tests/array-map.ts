import { doNotExecute, Equal, Expect } from "./utils";

doNotExecute(async () => {
  const tuple = [0, 1] as const;
  const mapped = tuple.map(
    (
      value: (typeof tuple)[number],
      index: number,
      source: readonly (typeof tuple)[number][],
    ) => 1,
  );

  tuple.map(() => 1, {});

  type tests = [
    Expect<Equal<(typeof mapped)["length"], 2>>,
    Expect<Equal<(typeof mapped)[0], number>>,
  ];

  mapped[0];
  mapped[1];
  // @ts-expect-error
  mapped[2];
});

doNotExecute(async () => {
  const tuple = [0, 1] as [0, 1];
  const mapped = tuple.map(
    (
      value: (typeof tuple)[number],
      index: number,
      source: (typeof tuple)[number][],
    ) => 1,
  );

  tuple.map(() => 1, {});

  type tests = [
    Expect<Equal<(typeof mapped)["length"], 2>>,
    Expect<Equal<(typeof mapped)[0], number>>,
  ];

  mapped[0];
  mapped[1];
  // @ts-expect-error
  mapped[2];
});

doNotExecute(async () => {
  const arr: readonly number[] = [0, 1];
  const mapped = arr.map(
    (
      value: (typeof arr)[number],
      index: number,
      source: readonly (typeof arr)[number][],
    ) => 1,
  );

  arr.map(() => 1, {});

  type tests = [Expect<Equal<(typeof mapped)["length"], number>>];
});

doNotExecute(async () => {
  const arr: number[] = [0, 1];
  const mapped = arr.map(
    (
      value: (typeof arr)[number],
      index: number,
      source: (typeof arr)[number][],
    ) => 1,
  );

  arr.map(() => 1, {});

  type tests = [Expect<Equal<(typeof mapped)["length"], number>>];
});
