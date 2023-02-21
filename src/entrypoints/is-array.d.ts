interface ArrayConstructor {
  isArray(arg: any): arg is ReadonlyArray<unknown> | Array<unknown>;
}
