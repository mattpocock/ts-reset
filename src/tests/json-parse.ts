import { doNotExecute, Equal, Expect } from "./utils";

doNotExecute(() => {
  const result = JSON.parse("{}");

  type tests = [Expect<Equal<typeof result, unknown>>];
});

doNotExecute(() => {
  type Named = { name: string };

  const result = JSON.parse<Named>("{ name: 'ts-reset' }");

  type tests = [Expect<Equal<typeof result, Named>>];
});
