/// <reference path="utils.d.ts" />

interface ReadonlyArray<T> {
  map<U>(
    callbackfn: (value: T, index: number, array: readonly T[]) => U,
    thisArg?: any,
  ): { [K in keyof this]: U };
}

interface Array<T> {
  map<U>(
    callbackfn: (value: T, index: number, array: T[]) => U,
    thisArg?: any,
  ): { [K in keyof this]: U };
}
