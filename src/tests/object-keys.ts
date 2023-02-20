import { doNotExecute, Equal, Expect } from "./utils";

doNotExecute(() => {
  // @ts-expect-error - Value cannot be undefined
  Object.keys(undefined);
  // @ts-expect-error - Value cannot be null
  Object.keys(null);
});

doNotExecute(() => {
  // Calling Object.keys on a non-nullish primitive, should not try to do
  // anything smart (in reality this will be an empty array)
  const result = Object.keys(5);
  type tests = [Expect<Equal<typeof result, string[]>>];
});

doNotExecute(() => {
  // Calling Object.keys on a non-tuple array should result in string[]
  const result = Object.keys([1, 2, 3]);
  type tests = [Expect<Equal<typeof result, string[]>>];
});

doNotExecute(() => {
  const tuple: [number, number] = [0, 0];
  const result = Object.keys(tuple);
  // We could probably try to infer that the result is `['1', '2']` but this
  // implementation does't go that far down the rabbit hole.
  type tests = [Expect<Equal<typeof result, string[]>>];
});

doNotExecute(() => {
  const result = Object.keys({ a: 1, b: 2 });
  type tests = [Expect<Equal<typeof result, ("a" | "b")[]>>];
});

doNotExecute(() => {
  const obj: any = {};
  const result = Object.keys(obj);
  type tests = [Expect<Equal<typeof result, string[]>>];
});

doNotExecute(() => {
  const obj: object = {};
  const result = Object.keys(obj);
  type tests = [Expect<Equal<typeof result, string[]>>];
});

doNotExecute(() => {
  const obj: Record<string, any> = {};
  const result = Object.keys(obj);
  type tests = [Expect<Equal<typeof result, string[]>>];
});

doNotExecute(() => {
  const result = Object.keys({});
  type tests = [Expect<Equal<typeof result, string[]>>];
});
