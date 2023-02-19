interface ReadonlyArray<T> {
  includes(
    searchElement: T | (TSReset.WidenLiteral<T> & {}),
    fromIndex?: number,
  ): searchElement is T;
}

declare namespace TSReset {
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
