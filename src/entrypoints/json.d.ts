declare namespace TSReset {
  type JsonPrimitive = string | number | boolean | null;

  type JsonValue = JsonPrimitive | JsonObject | JsonValue[];

  type JsonObject = { [key: string]: JsonValue };

  type JsonAlgebra<A> = JsonPrimitive | Record<string, A> | A[];

  type JsonHolder<K extends string, A> = Record<K, JsonAlgebra<A>>;
}
