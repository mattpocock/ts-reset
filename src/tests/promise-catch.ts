import { doNotExecute, Equal, Expect } from "./utils";

doNotExecute(async () => {
  Promise.reject("string instead of Error").catch((err) => {
    type test = Expect<Equal<unknown, typeof err>>;
  });

  Promise.reject("string instead of Error").then(
    () => {},
    (err) => {
      type test = Expect<Equal<unknown, typeof err>>;
    },
  );
});
