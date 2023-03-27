interface ObjectConstructor {
  keys<T extends {}>(object: T): ReadonlyArray<keyof T>;
  values<T extends {}>(object: T): ReadonlyArray<T[keyof T]>;
}
