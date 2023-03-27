declare namespace TSReset {
  type JsonPrimitive = string | number | boolean | null;

  type JsonComposite<A> = Record<string, A> | A[];

  type JsonValueF<A> = JsonPrimitive | JsonComposite<A>;

  type JsonValue = JsonPrimitive | JsonObject | JsonValue[];

  type JsonObject = { [key: string]: JsonValue };

  type JsonHolder<K extends string, A> = Record<K, JsonValueF<A>>;

  type ToJson<A> = A extends { toJSON(...args: any): infer T } ? T : A;

  type SomeExtends<A, B> = A extends B ? undefined : never;

  type SomeFunction = (...args: any) => any;

  type SomeConstructor = new (...args: any) => any;

  type UndefinedDomain = symbol | SomeFunction | SomeConstructor | undefined;

  type StringifyValue<A> = A extends UndefinedDomain ? undefined : string;

  type StringifyResult<A> = StringifyValue<A> | SomeExtends<UndefinedDomain, A>;
}
