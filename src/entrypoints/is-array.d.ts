interface ArrayConstructor {
  // @ts-ignore
  isArray<T>(arg: T[] extends T ? T | T[] : never): arg is unknown[];
}
