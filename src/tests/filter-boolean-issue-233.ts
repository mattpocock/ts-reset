import { doNotExecute, Equal, Expect } from "./utils";

type Animal = {
  type: string;
  name: string;
};

const pet = (animals: ReadonlyArray<Animal>): string => {
  throw new Error(`Not implemented`);
};

// Case 1: No filter - correctly errors (missing `name`)
doNotExecute(() => {
  pet([
    { type: "cat", name: "Fluffy" },
    // @ts-expect-error - missing `name`
    { type: "dog" },
  ]);
});

// Case 2: filter(Boolean) assigned to variable - correctly errors
doNotExecute(() => {
  const badPets = [{ type: "cat", name: "Fluffy" }, { type: "dog" }].filter(
    Boolean,
  );

  // @ts-expect-error - missing `name` on second element
  pet(badPets);
});

// Case 3: filter(Boolean) inline - should error (missing `name`)
// Regression test for https://github.com/total-typescript/ts-reset/issues/233
doNotExecute(() => {
  pet(
    // @ts-expect-error - missing `name` on second element
    [{ type: "cat", name: "Fluffy" }, { type: "dog" }].filter(Boolean),
  );
});

// Edge case: generic function context
// NoInfer should not break inference when T comes from a type parameter
doNotExecute(() => {
  function removeFalsy<T>(arr: (T | null | undefined)[]): T[] {
    return arr.filter(Boolean) as T[];
  }

  const result = removeFalsy([1, null, 2, undefined, 3]);
  type tests = [Expect<Equal<typeof result, number[]>>];
});

// Edge case: filter(Boolean) result fed into another generic
doNotExecute(() => {
  const arr = [1, undefined, "hello", null];
  const result = arr.filter(Boolean);
  const mapped = result.map((x) => x);

  type tests = [Expect<Equal<typeof mapped, (string | number)[]>>];
});

// Edge case: filter(Boolean) on array with all-falsy union members
doNotExecute(() => {
  const arr: (null | undefined | 0)[] = [null, undefined, 0];
  const result = arr.filter(Boolean);

  type tests = [Expect<Equal<typeof result, never[]>>];
});

// Edge case: const tuple narrowing still works
doNotExecute(() => {
  const arr = ["a", undefined, "b", null] as const;
  const result = arr.filter(Boolean);

  type tests = [Expect<Equal<typeof result, ("a" | "b")[]>>];
});

// Edge case: inline filter(Boolean) where all elements are valid should pass
doNotExecute(() => {
  pet(
    [
      { type: "cat", name: "Fluffy" },
      { type: "dog", name: "Spot" },
    ].filter(Boolean),
  );
});
