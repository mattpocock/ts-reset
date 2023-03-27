import { doNotExecute, Equal, Expect } from "./utils";

const michael = { name: "Michael Jackson", age: 50 };

const importantDates = new Map([
  [
    'Charles Darwin publishes his book "On the Origin of Species"',
    new Date("1859-11-24"),
  ],
  [
    'Karl Marx publishes the first volume of his book "Das Kapital"',
    new Date("1867-09-14"),
  ],
  [
    "Albert Einstein's paper on mass-energy equivalence is received",
    new Date("1905-09-27"),
  ],
  [
    "Mahatma Gandhi begins his 300km march against the British salt tax",
    new Date("1930-03-12"),
  ],
  [
    'Martin Luther King Jr. delivers his famous "I have a dream" speech',
    new Date("1963-08-28"),
  ],
  [
    "Nelson Mandela is released after 27 years imprisonment in South Africa",
    new Date("1990-02-11"),
  ],
]);

doNotExecute(() => {
  const result = JSON.stringify(undefined);
  type tests = [Expect<Equal<typeof result, undefined>>];
});

doNotExecute(() => {
  // A function is treated as undefined by the JSON serializer
  const fn = () => {};
  const result = JSON.stringify(fn);
  type tests = [Expect<Equal<typeof result, undefined>>];
});

doNotExecute(() => {
  // A constructor is treated as undefined by the JSON serializer
  const fn = class {};
  const result = JSON.stringify(fn);
  type tests = [Expect<Equal<typeof result, undefined>>];
});

doNotExecute(() => {
  // A symbol is treated as undefined by the JSON serializer
  const x = Symbol();
  const result = JSON.stringify(x);
  type tests = [Expect<Equal<typeof result, undefined>>];
});

doNotExecute(() => {
  // If the incoming value can possibly be undefined then the return type can
  // possibly be undefined
  const result = JSON.stringify(5 as undefined | number);
  type tests = [Expect<Equal<typeof result, string | undefined>>];
});

doNotExecute(() => {
  // If the incoming value can possibly be a function then the return type can
  // possibly be undefined
  const result = JSON.stringify(5 as number | (() => number));
  type tests = [Expect<Equal<typeof result, string | undefined>>];
});

doNotExecute(() => {
  // If the incoming value can possibly be a constructor then the return type can
  // possibly be undefined
  const result = JSON.stringify(5 as number | (new () => number));
  type tests = [Expect<Equal<typeof result, string | undefined>>];
});

doNotExecute(() => {
  // If the incoming value can possibly be a symbol then the return type can
  // possibly be undefined
  const result = JSON.stringify(5 as number | symbol);
  type tests = [Expect<Equal<typeof result, string | undefined>>];
});

doNotExecute(() => {
  // If the type of the incoming value is `any` we can't assume anything about
  // it so return the broadest possible type
  const result = JSON.stringify(undefined as any);
  type tests = [Expect<Equal<typeof result, string | undefined>>];
});

doNotExecute(() => {
  // If the type of the incoming value is `unknown` we can't assume anything
  // about it so return the broadest possible type
  const result = JSON.stringify(undefined as unknown);
  type tests = [Expect<Equal<typeof result, string | undefined>>];
});

doNotExecute(() => {
  // If the type of the incoming value is `void` we can't assume anything
  // about it so return the broadest possible type
  const result = JSON.stringify(undefined as void);
  type tests = [Expect<Equal<typeof result, string | undefined>>];
});

doNotExecute(() => {
  // If the type of the incoming value is "non-nullish" we can be sure it's not
  // undefined, but we can't be sure it isn't a function (treated as undefined)
  // so return the broadest possible type.
  const fn = () => {};
  const result = JSON.stringify(fn as Object);
  type tests = [Expect<Equal<typeof result, string | undefined>>];
});

doNotExecute(() => {
  // If the type of the incoming value contains "object" (meaning non-primitive)
  // we can't be sure it isn't a function (treated as undefined) so return the
  // broadest possible type.
  const value = null as null | string | number | boolean | object;
  const result = JSON.stringify(value);
  type tests = [Expect<Equal<typeof result, string | undefined>>];
});

doNotExecute(() => {
  // If the type of the incoming value contains "Record<K, any>" (in which K is
  // any valid index type, e.g. string or symbol) we can't be sure it isn't a
  // function so return the broadest possible type.
  const value = null as null | string | Record<string, any>;
  const result = JSON.stringify(value);
  type tests = [Expect<Equal<typeof result, string | undefined>>];
});

doNotExecute(() => {
  const value = null as null | string | Record<string, unknown> | any[];
  const result = JSON.stringify(value);
  type tests = [Expect<Equal<typeof result, string>>];
});

doNotExecute(() => {
  const result = JSON.stringify(michael);

  type tests = [Expect<Equal<typeof result, string>>];
});

doNotExecute(() => {
  const result = JSON.stringify(michael, ["name"]);

  type tests = [Expect<Equal<typeof result, string>>];
});

doNotExecute(() => {
  const result = JSON.stringify(michael, null, 4);

  type tests = [Expect<Equal<typeof result, string>>];
});

doNotExecute(() => {
  const result = JSON.stringify(michael, ["name"], "\t");

  type tests = [Expect<Equal<typeof result, string>>];
});

doNotExecute(() => {
  type Value = Map<string, Date>;

  // @ts-expect-error
  const result = JSON.stringify<Value>(importantDates, (key, value) =>
    Object.fromEntries(value),
  );
});

doNotExecute(() => {
  type Value = Date | Map<string, Date>;

  const result = JSON.stringify<Value>(importantDates, (key, value) =>
    typeof value === "string" ? value : Object.fromEntries(value),
  );

  type tests = [Expect<Equal<typeof result, string>>];
});

doNotExecute(() => {
  type Value = Date | Map<string, Date>;

  const result = JSON.stringify<Value>(importantDates, (key, value) => {
    if (typeof value !== "string") return Object.fromEntries(value);
    return new Date(value) < new Date("1900-01-01") ? undefined : value;
  });

  type tests = [Expect<Equal<typeof result, string | undefined>>];
});
