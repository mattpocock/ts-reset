import { doNotExecute, Equal, Expect } from "./utils";

// Basic: grouped values are non-empty tuples
doNotExecute(() => {
  const items = ["a", "b", "c", "d"];
  const grouped = Object.groupBy(items, (letter) => letter.charCodeAt(0) % 2);

  const group = grouped[0];

  if (group) {
    type test = Expect<Equal<typeof group, [string, ...string[]]>>;

    const first = group[0];
    type test2 = Expect<Equal<typeof first, string>>;
  }
});

// Values are undefined-able before narrowing
doNotExecute(() => {
  const grouped = Object.groupBy(["a", "b"], (x) =>
    x === "a" ? "first" : "second",
  );

  const group = grouped["first"];
  type test = Expect<Equal<typeof group, [string, ...string[]] | undefined>>;
});

// Assignability: grouped values should be assignable to T[]
doNotExecute(() => {
  const grouped = Object.groupBy(["a", "b"], (x) =>
    x === "a" ? "first" : "second",
  );

  const acceptsArray = (arr: string[]) => {};

  const group = grouped["first"];
  if (group) {
    acceptsArray(group);
  }
});

// Destructuring after narrowing
doNotExecute(() => {
  const grouped = Object.groupBy([1, 2, 3], (x) =>
    x % 2 === 0 ? "even" : "odd",
  );

  const group = grouped["even"];
  if (group) {
    const [first, ...rest] = group;
    type test1 = Expect<Equal<typeof first, number>>;
    type test2 = Expect<Equal<typeof rest, number[]>>;
  }
});

// Union element types
doNotExecute(() => {
  const items: (string | number)[] = ["a", 1, "b", 2];
  const grouped = Object.groupBy(items, (item) => typeof item);

  const group = grouped["string"];
  if (group) {
    type test = Expect<
      Equal<typeof group, [string | number, ...(string | number)[]]>
    >;
  }
});

// String literal keys preserve the Partial<Record<K, ...>> structure
doNotExecute(() => {
  type Role = "admin" | "user";
  const items = [
    { name: "Alice", role: "admin" as Role },
    { name: "Bob", role: "user" as Role },
  ];
  const grouped = Object.groupBy(items, (item) => item.role);

  type test = Expect<
    Equal<
      typeof grouped,
      Partial<
        Record<Role, [(typeof items)[number], ...(typeof items)[number][]]>
      >
    >
  >;
});
