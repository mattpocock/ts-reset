import { doNotExecute, Equal, Expect } from './utils';

doNotExecute(async () => {
  const result1 = Object.entries({ a: 1, b: 2, c: 3 } as const);
  const result2 = Object.entries({ a: true, b: 'string', c: { field: 1 } } as const);
  const result3 = Object.entries([1, 2, 3] as const);

  type tests = [
    // Basic functionality test
    Expect<Equal<typeof result1, (['a', 1] | ["b", 2] | ['c', 3])[]>>,
    // Complex values
    Expect<Equal<typeof result2, (['a', true] | ['b', 'string'] | ['c', { readonly field: 1 }])[]>>,
    // Array
    Expect<Equal<typeof result3, [number, 1 | 2 | 3][]>>,
  ];
});
