declare namespace TSReset {
  type NonFalsy<T> = T extends false | 0 | "" | null | undefined | 0n
    ? never
    : T;

  type Primitive =
    | string
    | number
    | boolean
    | bigint
    | symbol

  type Join<Lower, Upper>
    = Upper extends Upper
    ? Lower extends Upper
    ? Upper
    : never
    : never

  type WidenLiteral<T> = T extends Primitive ? Join<T, Primitive> : T
}
