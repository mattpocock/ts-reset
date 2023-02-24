interface Body {
  json<T = unknown>(): Promise<T>;
}
