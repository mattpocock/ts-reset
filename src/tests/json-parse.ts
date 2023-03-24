import { isNumber, isString, isEntries } from "./type-guards";
import { doNotExecute, Equal, Expect } from "./utils";

const isNumberStringEntries = isEntries(isNumber, isString);

doNotExecute(() => {
  const result = JSON.parse("{}");

  type tests = [Expect<Equal<typeof result, TSReset.JsonValue>>];
});

doNotExecute(() => {
  const result = JSON.parse('{"p": 5}', (key, value) =>
    typeof value === "number" ? value * 2 : value,
  );

  type tests = [Expect<Equal<typeof result, unknown>>];
});

doNotExecute(() => {
  const result = JSON.parse<TSReset.JsonValue>('{"p": 5}', (key, value) =>
    typeof value === "number" ? value * 2 : value,
  );

  type tests = [Expect<Equal<typeof result, TSReset.JsonValue>>];
});

doNotExecute(() => {
  const result = JSON.parse('[[1,"one"],[2,"two"],[3,"three"]]', (key, value) =>
    // @ts-expect-error
    key === "" ? new Map(value) : value,
  );
});

doNotExecute(() => {
  const result = JSON.parse('[[1,"one"],[2,"two"],[3,"three"]]', (key, value) =>
    key === "" && isNumberStringEntries(value) ? new Map(value) : value,
  );

  type tests = [Expect<Equal<typeof result, unknown>>];
});

doNotExecute(() => {
  type JsonValueWithMap = TSReset.JsonValue | Map<number, string>;

  const result = JSON.parse<JsonValueWithMap>(
    '[[1,"one"],[2,"two"],[3,"three"]]',
    (key, value) =>
      // @ts-expect-error
      key === "" && isNumberStringEntries(value) ? new Map(value) : value,
  );
});

doNotExecute(() => {
  type JsonValueWithMap = TSReset.JsonValueF<
    TSReset.JsonValue | Map<number, string>
  >;

  const result = JSON.parse<JsonValueWithMap>(
    '[[1,"one"],[2,"two"],[3,"three"]]',
    (key, value) =>
      // @ts-expect-error
      key === "" && isNumberStringEntries(value) ? new Map(value) : value,
  );
});

doNotExecute(() => {
  type JsonValueWithMap =
    | TSReset.JsonPrimitive
    | Map<number, string>
    | JsonObjectWithMap
    | JsonValueWithMap[];

  type JsonObjectWithMap = { [key: string]: JsonValueWithMap };

  const result = JSON.parse<JsonValueWithMap>(
    '[[1,"one"],[2,"two"],[3,"three"]]',
    (key, value) =>
      key === "" && isNumberStringEntries(value) ? new Map(value) : value,
  );

  type tests = [Expect<Equal<typeof result, JsonValueWithMap>>];
});
