import { doNotExecute, Equal, Expect } from "./utils";

// Ensure that arbitrary access to localStorage is not allowed
doNotExecute(() => {
  type test = Expect<Equal<typeof localStorage.a, unknown>>;

  // @ts-expect-error
  localStorage.a.b.c;
});

// Ensure that the type of localStorage remains correct
doNotExecute(() => {
  type tests = [
    Expect<Equal<typeof localStorage.getItem, (key: string) => string | null>>,
    Expect<
      Equal<typeof localStorage.setItem, (key: string, value: string) => void>
    >,
    Expect<Equal<typeof localStorage.removeItem, (key: string) => void>>,
    Expect<Equal<typeof localStorage.clear, () => void>>,
    Expect<Equal<typeof localStorage.key, (index: number) => string | null>>,
    Expect<Equal<typeof localStorage.length, number>>,
  ];
});

// Ensure that arbitrary access to sessionStorage is not allowed
doNotExecute(() => {
  type test = Expect<Equal<typeof sessionStorage.a, unknown>>;

  // @ts-expect-error
  sessionStorage.a.b.c;
});

// Ensure that the type of sessionStorage remains correct
doNotExecute(() => {
  type tests = [
    Expect<
      Equal<typeof sessionStorage.getItem, (key: string) => string | null>
    >,
    Expect<
      Equal<typeof sessionStorage.setItem, (key: string, value: string) => void>
    >,
    Expect<Equal<typeof sessionStorage.removeItem, (key: string) => void>>,
    Expect<Equal<typeof sessionStorage.clear, () => void>>,
    Expect<Equal<typeof sessionStorage.key, (index: number) => string | null>>,
    Expect<Equal<typeof sessionStorage.length, number>>,
  ];
});
