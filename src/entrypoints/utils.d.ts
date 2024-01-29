declare namespace TSReset {
  type NonFalsy<T> = T extends false | 0 | "" | null | undefined | 0n
    ? never
    : T;

  type FilterNonFalsy<T> = T extends readonly [infer F, ...infer R]
    ? F extends false | 0 | "" | null | undefined | 0n
      ? FilterNonFalsy<R>
      : [F, ...FilterNonFalsy<R>]
    : [];

  type WidenLiteral<T> = T extends string
    ? string
    : T extends number
    ? number
    : T extends boolean
    ? boolean
    : T extends bigint
    ? bigint
    : T extends symbol
    ? symbol
    : T;
}
