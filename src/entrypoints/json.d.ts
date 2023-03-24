declare namespace TSReset {
  type JsonPrimitive = string | number | boolean | null;

  type JsonComposite<A> = Record<string, A> | A[];

  type JsonAlgebra<A> = JsonPrimitive | JsonComposite<A>;

  type JsonValue = JsonPrimitive | JsonObject | JsonValue[];

  type JsonObject = { [key: string]: JsonValue };

  type JsonHolder<K extends string, A> = Record<K, JsonAlgebra<A>>;
}
