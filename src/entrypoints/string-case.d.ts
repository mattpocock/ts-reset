interface String {
  toLowerCase<T extends string>(this: T): Lowercase<T>;
  toUpperCase<T extends string>(this: T): Uppercase<T>;
}
