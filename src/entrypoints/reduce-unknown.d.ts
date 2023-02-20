interface Array<T> {
  reduce<U>(
    callbackfn: (
      previousValue: U extends Record<string, never> ? unknown : U,
      currentValue: T,
      currentIndex: number,
      array: T[],
    ) => U extends Record<string, never> ? unknown : U,
    initialValue: U,
  ): U extends Record<string, never> ? unknown : U;
}
