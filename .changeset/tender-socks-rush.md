---
"@total-typescript/ts-reset": minor
---

Added a rule, `/promise-catch`, to change the `catch` method to take `unknown` instead of `any` as an argument.

```ts
const promise = Promise.reject("error");

// BEFORE

promise.catch((error) => {
  console.error(error); // error is any!
});

// AFTER

promise.catch((error) => {
  console.error(error); // error is unknown!
});
```
