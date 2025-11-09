/// <reference path="utils.d.ts" />

interface Array<T> {
  filter<S extends T>(
    predicate: BooleanConstructor,
    thisArg?: any,
  ): NoInfer<TSReset.NonFalsy<S>[]>;
}

interface ReadonlyArray<T> {
  filter<S extends T>(
    predicate: BooleanConstructor,
    thisArg?: any,
  ): NoInfer<TSReset.NonFalsy<S>[]>;
}
