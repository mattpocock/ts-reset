type Whitespace = " " | "\n" | "\t";

type TrimLeft<S extends string> = S extends `${Whitespace}${infer Rest}`
  ? TrimLeft<Rest>
  : S;

type TrimRight<S extends string> = S extends `${infer Rest}${Whitespace}`
  ? TrimRight<Rest>
  : S;

interface String {
  trim<S extends string>(this: S): TrimLeft<TrimRight<S>>;
  trimRight<S extends string>(this: S): TrimRight<S>;
  trimStart<S extends string>(this: S): TrimLeft<S>;
  trimLeft<S extends string>(this: S): TrimLeft<S>;
  trimEnd<S extends string>(this: S): TrimRight<S>;
}
