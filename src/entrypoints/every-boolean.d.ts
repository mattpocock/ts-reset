/// <reference path="utils.d.ts" />

interface Array<T> {
  every<U>(
    predicate: BooleanConstructor,
    thisArg?: any,
  ): this is this extends U[]
    ? TSReset.NonFalsy<T>[]
    : this[number] extends TSReset.NonFalsy<T>
    ? this
    : never;
}

interface ReadonlyArray<T> {
  every<U>(
    predicate: BooleanConstructor,
    thisArg?: any,
  ): this is this extends U[]
    ? TSReset.NonFalsy<T>[]
    : this[number] extends TSReset.NonFalsy<T>
    ? this
    : never;
}
