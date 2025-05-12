/// <reference lib="webworker" />
import { doNotExecute, Equal, Expect } from "./utils";

declare let self: ServiceWorkerGlobalScope;

// Simulate PushMessageData usage in a service worker
doNotExecute(() => {
  self.addEventListener("push", function (event) {
    if (event.data) {
      const data = event.data.json();
      type tests = [Expect<Equal<typeof data, unknown>>];
    }
  });
});

// Negative test: .json<T>() should not be allowed
doNotExecute(() => {
  // @ts-expect-error
  const data = event.data.json<string>();
});
