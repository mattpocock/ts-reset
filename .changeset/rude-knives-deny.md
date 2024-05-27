---
"@total-typescript/ts-reset": minor
---

Added a rule, `/map-constructor`, to default `Map` to `Map<unknown, unknown>` when no arguments are passed to the constructor.

Before, you'd get `any` for both key and value types. Now, the result of `Map.get` is `unknown` instead of `any`:

```ts
const userMap = new Map();

const value = userMap.get("matt"); // value: unknown
```

This now is part of the recommended rules.
