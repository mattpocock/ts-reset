/// <reference path="utils.d.ts" />

// TODO: See how to remove the fill method from the interface completely
interface ReadonlyArray<T> {
  fill: never;
}

// TODO: See how to override the fill method so that an Array<T>.fill<U> makes the Array<T> an Array<U>
interface Array<T> {
  fill<U>(
    value: U | (TSReset.WidenLiteral<U> & {}),
    start?: number,
    end?: number,
  ): (U | (TSReset.WidenLiteral<U> & {}))[];
}
