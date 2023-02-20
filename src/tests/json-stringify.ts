import { doNotExecute, Equal, Expect } from "./utils";

doNotExecute(() => {
  const result = JSON.stringify(undefined);
  type tests = [Expect<Equal<typeof result, string | undefined>>];
});

doNotExecute(() => {
  const result = JSON.stringify(5 as undefined | number);
  type tests = [Expect<Equal<typeof result, string | undefined>>];
});

doNotExecute(() => {
  const result = JSON.stringify(undefined as any);
  type tests = [Expect<Equal<typeof result, string | undefined>>];
});

doNotExecute(() => {
  const result = JSON.stringify(undefined as unknown);
  type tests = [Expect<Equal<typeof result, string | undefined>>];
});

doNotExecute(() => {
  const value: null | string | number | boolean | object | Array<any> = null;
  const result = JSON.stringify(value);
  type tests = [Expect<Equal<typeof result, string>>];
});
