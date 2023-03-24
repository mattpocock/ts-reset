export type TypeGuard<A> = (value: unknown) => value is A;

export const isNumber: TypeGuard<number> = (value): value is number =>
  typeof value === "number";

export const isString: TypeGuard<string> = (value): value is string =>
  typeof value === "string";

export const isPair =
  <A, B>(isFirst: TypeGuard<A>, isSecond: TypeGuard<B>): TypeGuard<[A, B]> =>
  (value): value is [A, B] =>
    Array.isArray(value) &&
    value.length === 2 &&
    isFirst(value[0]) &&
    isSecond(value[1]);

export const isArray =
  <A>(isItem: TypeGuard<A>): TypeGuard<A[]> =>
  (value): value is A[] =>
    Array.isArray(value) && value.every((item) => isItem(item));

export const isEntries = <A, B>(isKey: TypeGuard<A>, isValue: TypeGuard<B>) =>
  isArray(isPair(isKey, isValue));
