interface ArrayConstructor {
  new (arrayLength?: number): unknown[];
  (arrayLength?: number): unknown[];

  // not sure if the following is needed:
  // new <T>(arrayLength: number): T[];
  // new <T>(...items: T[]): T[];
  // <T>(arrayLength: number): T[];
  // <T>(...items: T[]): T[];
  // readonly prototype: unknown[];

  // following only works with `export` or `export declare` prefixed.
  // readonly prototype: unknown[];
}

interface Array<T> {
  readonly prototype: unknown[];
}
