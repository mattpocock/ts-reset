declare namespace TSReset {
  type JsonValue = string | number | boolean | JsonValue[] | JsonObject | null;

  type JsonObject = { [key: string]: JsonValue };

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
}
