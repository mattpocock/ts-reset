import { doNotExecute, Equal, Expect } from "./utils";

const arr = [1, 2, 3];

// The new default should be unknown, not {}
doNotExecute(() => {
  const result = arr.reduce((accum, curr) => {
    type test = Expect<Equal<typeof accum, unknown>>;
  }, {});

  type test = Expect<Equal<typeof result, unknown>>;
});

// 'as' should still work
doNotExecute(() => {
  const result = arr.reduce((accum, curr) => {
    type test = Expect<Equal<typeof accum, Record<string, number>>>;

    return {};
  }, {} as Record<string, number>);

  type test = Expect<Equal<typeof result, Record<string, number>>>;
});

// Should still let you specify the type in the generic
doNotExecute(() => {
  const result = arr.reduce<Record<string, number>>((accum, curr) => {
    type test = Expect<Equal<typeof accum, Record<string, number>>>;

    return {};
  }, {});

  type test = Expect<Equal<typeof result, Record<string, number>>>;
});

// Should still let you specify the type in the generic
doNotExecute(() => {
  const result = arr.reduce((accum: Record<string, number>, curr) => {
    type test = Expect<Equal<typeof accum, Record<string, number>>>;

    return {};
  }, {});

  type test = Expect<Equal<typeof result, Record<string, number>>>;
});

// Should still work for non-{} values
doNotExecute(() => {
  arr.reduce((accum, curr) => {
    type test = Expect<Equal<typeof accum, number>>;

    return accum + curr;
  }, 0);

  arr.reduce((accum, curr) => {
    type test = Expect<Equal<typeof accum, string>>;

    return accum + curr;
  }, "");
});
