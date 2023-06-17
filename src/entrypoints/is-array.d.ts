interface ArrayConstructor {
  isArray<T>(arg: 0 extends 1 & T ? never : T): arg is 0 extends 1 & T ? never : T extends Array<unknown> | ReadonlyArray<unknown> ? T : T[] extends T ? T[] : never;
}
