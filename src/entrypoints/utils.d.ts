declare namespace TSReset {
  type NonFalsy<T> = T extends false | 0 | "" | null | undefined | 0n
    ? never
    : T;

  type WidenLiteral<T> = T extends string | number | boolean | bigint | symbol
    ? ReturnType<T["valueOf"]>
    : T;
}
