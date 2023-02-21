import { doNotExecute, Equal, Expect } from "./utils";

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
