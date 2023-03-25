import { doNotExecute, Equal, Expect } from "./utils";

const michael = { name: "Michael Jackson", age: 50 };

const importantDates = new Map([
  [
    'Charles Darwin publishes his book "On the Origin of Species"',
    new Date("1859-11-24"),
  ],
  [
    'Karl Marx publishes the first volume of his book "Das Kaptial"',
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
    'Martin Luther King Jr. delivers his "I have a dream" speech',
    new Date("1963-08-28"),
  ],
  [
    "Nelson Mandela is released after 27 years imprisonment in South Africa",
    new Date("1990-02-11"),
  ],
]);

doNotExecute(() => {
  const result = JSON.stringify(michael);

  type tests = [Expect<Equal<typeof result, string | undefined>>];
});

doNotExecute(() => {
  const result = JSON.stringify(michael, ["name"]);

  type tests = [Expect<Equal<typeof result, string | undefined>>];
});

doNotExecute(() => {
  const result = JSON.stringify(michael, null, 4);

  type tests = [Expect<Equal<typeof result, string | undefined>>];
});

doNotExecute(() => {
  const result = JSON.stringify(michael, ["name"], "\t");

  type tests = [Expect<Equal<typeof result, string | undefined>>];
});

doNotExecute(() => {
  type Value = Map<string, Date>;

  const result = JSON.stringify<Value>(importantDates, (key, value) =>
    // @ts-expect-error
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
