import { doNotExecute, Equal, Expect } from "./utils";

doNotExecute(() => {
  const result = JSON.stringify({});

  type tests = [Expect<Equal<typeof result, string | undefined>>];
});

doNotExecute(() => {
  const result = JSON.stringify(null);

  type tests = [Expect<Equal<typeof result, string>>];
});

doNotExecute(() => {
  const result = JSON.stringify(undefined);

  type tests = [Expect<Equal<typeof result, undefined>>];
});

doNotExecute(() => {
  // create a something that is either an object or null
  let toBeStringified: {} | null = Math.random() > 0.5 ? {} : null;
  const result = JSON.stringify(toBeStringified);

  type tests = [Expect<Equal<typeof result, string | undefined>>];
});

doNotExecute(() => {
  // create a something that is either an object or undefined
  let toBeStringified: {} | undefined = Math.random() > 0.5 ? {} : undefined;
  const result = JSON.stringify(toBeStringified);

  type tests = [Expect<Equal<typeof result, string | undefined>>];
});

doNotExecute(() => {
  // create a something that is a function
  const result = JSON.stringify(function () {});

  type tests = [Expect<Equal<typeof result, string | undefined>>];
});

doNotExecute(() => {
  function hello() {}
  function addToJSONtoFunction(func: any) {
    func.toJSON = () => "foo";
  }
  addToJSONtoFunction(hello);

  const result = JSON.stringify(hello);

  type tests = [Expect<Equal<typeof result, string | undefined>>];
});

doNotExecute(() => {
  // create a something that is a symbol
  const result = JSON.stringify(Symbol("hello"));

  type tests = [Expect<Equal<typeof result, undefined>>];
});

doNotExecute(() => {
  // create a something that is a function
  const result = JSON.stringify(function (hello: any, world: any) {});

  type tests = [Expect<Equal<typeof result, string | undefined>>];
});

doNotExecute(() => {
  // create a something that is of type any
  let toBeStringified: any;
  const result = JSON.stringify(toBeStringified);

  type tests = [Expect<Equal<typeof result, string | undefined>>];
});

doNotExecute(() => {
  // create a something that is a string
  const result = JSON.stringify("undefined");

  type tests = [Expect<Equal<typeof result, string>>];
});

doNotExecute(() => {
  // create a something that is a Date object
  const result = JSON.stringify(new Date());

  type tests = [Expect<Equal<typeof result, string | undefined>>];
});

doNotExecute(() => {
  const result = JSON.stringify(undefined, () => "foo"); // '"foo"'

  type tests = [Expect<Equal<typeof result, string>>];
});

doNotExecute(() => {
  const result = JSON.stringify("foo", () => undefined); // undefined

  type tests = [Expect<Equal<typeof result, undefined>>];
});

doNotExecute(() => {
  const result = JSON.stringify("foo", () => function () {}); // function

  type tests = [Expect<Equal<typeof result, undefined>>];
});

doNotExecute(() => {
  const result = JSON.stringify("foo", () => Symbol("hello")); // symbol

  type tests = [Expect<Equal<typeof result, undefined>>];
});

doNotExecute(() => {
  const anyFunc: () => any = () => "foo";
  const result = JSON.stringify("foo", anyFunc);

  type tests = [Expect<Equal<typeof result, string | undefined>>];
});

doNotExecute(() => {
  const objWithToJSON = {
    hello: "world",
    toJSON: () => undefined,
  };
  const result = JSON.stringify(objWithToJSON);

  type tests = [Expect<Equal<typeof result, string | undefined>>];
});

doNotExecute(() => {
  const objWithToJSON = {
    hello: "world",
    toJSON: () => "foo",
  };
  const result = JSON.stringify(objWithToJSON);

  type tests = [Expect<Equal<typeof result, string | undefined>>];
});

doNotExecute(() => {
  const objWithToJSON = {
    hello: "world",
    toJSON: () => undefined,
  };
  const result = JSON.stringify(objWithToJSON);

  type tests = [Expect<Equal<typeof result, string | undefined>>];
});

doNotExecute(() => {
  function functionWithToJSON() {
    return "world";
  }
  functionWithToJSON.toJSON = () => "foo";
  const result = JSON.stringify(functionWithToJSON);

  type tests = [Expect<Equal<typeof result, string | undefined>>];
});

doNotExecute(() => {
  function functionWithToJSON() {
    return "world";
  }
  functionWithToJSON.toJSON = () => "foo";

  const result = JSON.stringify("foo", () => functionWithToJSON);

  type tests = [Expect<Equal<typeof result, undefined>>];
});

doNotExecute(() => {
  // Date has a toJSON method
  const result = JSON.stringify(new Date());

  type tests = [Expect<Equal<typeof result, string | undefined>>];
});
