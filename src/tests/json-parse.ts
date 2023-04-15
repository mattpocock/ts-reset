import { doNotExecute, Equal, Expect } from "./utils";
import { JsonValue } from "../json-types";

doNotExecute(() => {
  const result = JSON.parse("{}");

  type tests = [Expect<Equal<typeof result, JsonValue>>];
});

doNotExecute(() => {
  // Make tests fail when someone tries to PR JSON.parse<T>

  // @ts-expect-error
  const result = JSON.parse<string>("{}");
});
