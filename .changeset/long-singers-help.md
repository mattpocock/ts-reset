---
"@total-typescript/ts-reset": minor
---

Added a rule, `/session`, to make sessionStorage and localStorage safer.

```ts
// Is now typed as `unknown`, not `any`!
localStorage.a;

// Is now typed as `unknown`, not `any`!
sessionStorage.abc;
```
