interface ObjectConstructor {
  entries<T>(o: T): T extends ArrayLike<any> ? { [K in Extract<keyof T, number>]: [K, T[K]] }[number][] : { [K in keyof T]: [K, T[K]] }[keyof T][];
}
