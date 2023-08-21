declare namespace TSReset {
  type NonFalsy<T> = T extends false | 0 | "" | null | undefined | 0n
    ? never
    : T;

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

  type Length<T extends any[]> = T extends { length: infer L }
    ? L
    : never

  type BuildTuple<L extends number, T extends any[] = []> = T extends { length: L }
    ? T
    : BuildTuple<L, [...T, any]>

  type Subtract<A extends number, B extends number> = BuildTuple<A> extends [...(infer U), ...BuildTuple<B>]
    ? Length<U>
    : never

  type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends <
    T,
  >() => T extends Y ? 1 : 2
    ? true
    : false;
  type NotEqual<X, Y> = true extends Equal<X, Y> ? false : true;
}
