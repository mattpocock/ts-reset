interface Array<T> {
  filter(predicate: BooleanConstructor, thisArg?: any): TSReset.NonFalsy<T>[];
}

interface ReadonlyArray<T> {
  filter(predicate: BooleanConstructor, thisArg?: any): TSReset.NonFalsy<T>[];
}

declare namespace TSReset {
  type NonFalsy<T> = T extends false | 0 | "" | null | undefined ? never : T;
}
