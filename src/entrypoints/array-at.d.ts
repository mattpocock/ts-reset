/// <reference path="utils.d.ts" />

interface ReadonlyArray<T> {
  at<
    const N extends number,
    I extends number = `${N}` extends `${infer J extends number}.${number}`
      ? J
      : N,
  >(
    index: N,
  ): TSReset.Equal<I, number> extends true
    ? T | undefined
    : `${I}` extends `-${infer J extends number}`
    ? TSReset.Subtract<this["length"], J> extends infer K extends number
      ? [K] extends [never]
        ? undefined
        : this[K]
      : undefined
    : this[I];
}
