import { doNotExecute, Equal, Expect } from "./utils";

// TODO: Add tests that check the type overrides for the fill method once they are implemented

doNotExecute(() => {
  const arr = [] as const;

  // @ts-expect-error
  arr.fill(2);
});

doNotExecute(() => {
  const arr = [1, "2", { a: 3 }, []];

  const newArr = arr.fill(2);

  // @ts-expect-error
  type Test = Expect<Equal<typeof newArr, typeof arr>>;
});

doNotExecute(() => {
  const arr = [1, "2", { a: 3 }, []];

  const newArr = arr.fill(2);

  type Test = Expect<Equal<typeof newArr, number[]>>;
});

doNotExecute(() => {
  const arr = [1, "2", { a: 3 }, []];

  const newArr = arr.fill({ b: 1 } as const);

  type Test = Expect<
    Equal<
      typeof newArr,
      {
        readonly b: 1;
      }[]
    >
  >;
});

doNotExecute(() => {
  const arr = [1, "2", { a: 3 }, []];

  const newArr = arr.fill(2, 0);

  // @ts-expect-error
  type Test = Expect<Equal<typeof newArr, typeof arr>>;
});

doNotExecute(() => {
  const arr = [1, "2", { a: 3 }, []];

  const newArr = arr.fill(2, 0);

  type Test = Expect<Equal<typeof newArr, number[]>>;
});

doNotExecute(() => {
  const arr = ["2", { a: 3 }, []];

  const newArr = arr.fill(2, 1);

  type Test = Expect<Equal<typeof newArr, (number | (typeof arr)[number])[]>>;
});
