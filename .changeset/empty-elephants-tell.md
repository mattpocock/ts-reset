---
"@total-typescript/ts-reset": minor
---

Changed the array.includes on readonly arrays to NOT be a type predicate. Before this change, this perfectly valid code would not behave correctly.

```ts
type Code = 0 | 1 | 2;
type SpecificCode = 0 | 1;

const currentCode: Code = 0;

// Create an empty list of subset type
const specificCodeList: ReadonlyArray<SpecificCode> = [];

// This will be false, since 0 is not in []
if (specificCodeList.includes(currentCode)) {
  currentCode; // -> SpecificCode
} else {
  // This branch will be entered, and ts will think z is 2, when it is actually 0
  currentCode; // -> 2
}
```

Removing the type predicate brings ts-reset closer towards correctness.
