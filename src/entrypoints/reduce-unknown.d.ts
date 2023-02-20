interface Array<T> {
  reduce(
    callbackfn: (
      previousValue: unknown,
      currentValue: T,
      currentIndex: number,
      array: T[],
    ) => unknown,
    initialValue: Record<string, never>,
  ): unknown;
}
