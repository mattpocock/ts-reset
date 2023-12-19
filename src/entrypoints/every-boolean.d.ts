/// <reference path="utils.d.ts" />

interface Array<T> {
  every(
    predicate: BooleanConstructor,
    thisArg?: any,
  ): this is this extends T[]
    ? TSReset.NonFalsy<T>[]
    : this[number] extends TSReset.NonFalsy<T>
    ? this
    : never;
}

interface ReadonlyArray<T> {
  every(
    predicate: BooleanConstructor,
    thisArg?: any,
  ): this is this extends T[]
    ? TSReset.NonFalsy<T>[]
    : this[number] extends TSReset.NonFalsy<T>
    ? this
    : never;
}
