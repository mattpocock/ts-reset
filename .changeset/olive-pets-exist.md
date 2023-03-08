---
"@total-typescript/ts-reset": minor
---

author: @mefechoel

Added the `Map.has` rule.

Similar to `.includes` or `Set.has()`, `Map.has()` doesn't let you pass members that don't exist in the map's keys:

```ts
// BEFORE
const userMap = new Map([
  ["matt", 0],
  ["sofia", 1],
  [2, "waqas"],
] as const);

// Argument of type '"bryan"' is not assignable to
// parameter of type '"matt" | "sofia" | "waqas"'.
userMap.has("bryan");
```

With the rule enabled, `Map` follows the same semantics as `Set`.

```ts
// AFTER
import "@total-typescript/ts-reset/map-has";

const userMap = new Map([
  ["matt", 0],
  ["sofia", 1],
  [2, "waqas"],
] as const);

// .has now takes a string as the argument!
userMap.has("bryan");
```
