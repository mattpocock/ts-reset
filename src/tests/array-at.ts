import { doNotExecute, Equal, Expect } from "./utils";

doNotExecute(async () => {
  const arr = [false, 1, '2'] as const;

  const a = arr.at(0)
  const b = arr.at(1)
  const c = arr.at(2)
  const d = arr.at(3)
  type tests = [
    Expect<Equal<typeof a, false>>,
    Expect<Equal<typeof b, 1>>,
    Expect<Equal<typeof c, '2'>>,
    Expect<Equal<typeof d, undefined>>,
  ]
});

doNotExecute(async () => {
  const arr = [false, 1, '2'] as const;

  const a = arr.at(-1)
  const b = arr.at(-2)
  const c = arr.at(-3)
  const d = arr.at(-4)
  type tests = [
    Expect<Equal<typeof a, '2'>>,
    Expect<Equal<typeof b, 1>>,
    Expect<Equal<typeof c, false>>,
    Expect<Equal<typeof d, undefined>>,
  ]
});

doNotExecute(async () => {
  const arr = [false, 1, '2'] as const;
  const index = 1 as number
  const a = arr.at(index)
  type tests = [
    Expect<Equal<typeof a, false | 1 | "2" | undefined>>,
  ]
});