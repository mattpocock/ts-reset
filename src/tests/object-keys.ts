import { doNotExecute, Equal, Expect } from "./utils";

type SampleType = {
  key1: string;
  key2: number;
};

const initData: SampleType = {
  key1: "one",
  key2: 1,
};

const otherData: SampleType = {
  key1: "two",
  key2: 2,
};

doNotExecute(() => {
  Object.keys(initData).forEach((k) => {
    type Test = Expect<Equal<typeof k, keyof SampleType>>;
    // Look ma, no error
    initData[k] !== otherData[k];
  });
});
