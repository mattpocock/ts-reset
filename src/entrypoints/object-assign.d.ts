interface Object {
  assign<T, S>(target: T, source: S): asserts target is T & S;
}
