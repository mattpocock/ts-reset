import { doNotExecute, Equal, Expect } from "./utils";

doNotExecute(() => {
  // check that new array is inferred correctly to unknown[]
  const unknownArr = new Array();

  type tests = [Expect<Equal<typeof unknownArr, unknown[]>>];
});

doNotExecute(() => {
  // array with length property
  const unknownArr = new Array(10);

  type tests = [Expect<Equal<typeof unknownArr, unknown[]>>];
});

doNotExecute(() => {
  // array with items
  const numberArray = new Array(1, 2);

  type tests = [Expect<Equal<typeof numberArray, number[]>>];
});
