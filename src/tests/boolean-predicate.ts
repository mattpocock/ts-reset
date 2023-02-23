import { doNotExecute, Equal, NotEqual, Expect } from "./utils";

doNotExecute(() => {
  let obj: { foo: "bar" } | undefined;

  if (Boolean(obj)) {
    type test = Expect<Equal<typeof obj, { foo: "bar" }>>;
  } else {
    type test = Expect<Equal<typeof obj, undefined>>;
  }
});

doNotExecute(() => {
  let obj: "" | 0 | undefined;

  if (Boolean(obj)) {
    type test = Expect<Equal<typeof obj, never>>;
  } else {
    type test = Expect<Equal<typeof obj, "" | 0 | undefined>>;
  }
});

doNotExecute(() => {
  let obj: 1 | "" | 0 | undefined;

  if (Boolean(obj)) {
    type test = Expect<Equal<typeof obj, 1>>;
  } else {
    type test = Expect<Equal<typeof obj, "" | 0 | undefined>>;
  }
});

doNotExecute(() => {
  let obj: any;

  const result = Boolean(obj);

  type test = Expect<Equal<typeof result, boolean>>;
});

doNotExecute(() => {
  let obj = {} as any[];

  const result = Boolean(obj);

  type tests = [
    Expect<Equal<typeof result, boolean>>,
    Expect<Equal<typeof obj, any[]>>,
    Expect<NotEqual<typeof obj, unknown[]>>
  ];
});

doNotExecute(() => {
  let obj = {} as unknown[];

  const result = Boolean(obj);

  type tests = [
    Expect<Equal<typeof result, boolean>>,
    Expect<Equal<typeof obj, unknown[]>>,
    Expect<NotEqual<typeof obj, any[]>>
  ];
});
