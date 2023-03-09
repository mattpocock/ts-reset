import { doNotExecute } from "./utils";

doNotExecute(() => {
  const map = new Map([
    [1, "1"],
    [2, "2"],
    [3, "3"],
  ] as const);

  map.has(4);

  map.has(
    // @ts-expect-error
    "4",
  );

  map.has(
    // @ts-expect-error
    true,
  );
});

doNotExecute(() => {
  const map = new Map([
    [1, "1"],
    [2, "2"],
    [3, "3"],
  ] as const) as ReadonlyMap<1 | 2 | 3, "1" | "2" | "3">;

  map.has(4);

  map.has(
    // @ts-expect-error
    "4",
  );

  map.has(
    // @ts-expect-error
    true,
  );
});
