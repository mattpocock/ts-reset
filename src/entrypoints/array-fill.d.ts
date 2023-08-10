/// <reference path="utils.d.ts" />

interface ReadonlyArray<T> {
  fill<U>(
    value: U | (TSReset.WidenLiteral<U> & {}),
    start?: number | undefined,
    end?: number | undefined,
  ): U[];
}

interface Array<T> {
  fill<U>(
    value: U | (TSReset.WidenLiteral<U> & {}),
    start?: number | undefined,
    end?: number | undefined,
  ): U[];
}
