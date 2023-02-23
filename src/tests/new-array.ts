import { doNotExecute, Equal, Expect } from "./utils";

// check that new array is inferred correctly to unknown[]
doNotExecute(() => {
  const unknownArr = new Array();

  type tests = [Expect<Equal<typeof unknownArr, unknown[]>>];
});

doNotExecute(() => {
  // appears to be any[] instead of unknown[]
  // const alsoUnkownArr = [];
  // type tests = [Expect<Equal<typeof alsoUnkownArr, unknown[]>>];
});
