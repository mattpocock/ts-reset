/// <reference path="utils.d.ts" />

interface BooleanConstructor {
  new (value?: any): Boolean;
  <T>(value?: T): value is TSReset.NonFalsy<T>;
  readonly prototype: Boolean;
}
