interface ObjectConstructor {
  entries<const T extends object>(o: T): { [K in keyof T]: [K, T[K]] }[keyof T][];
}
