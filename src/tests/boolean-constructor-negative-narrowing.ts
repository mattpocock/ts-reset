/**
 * Documents a problem with making Boolean() a type predicate.
 *
 * If BooleanConstructor is overridden with:
 *   <T>(value?: T): value is NonFalsy<T>
 * the else/false branch narrows too aggressively — e.g. `string | undefined`
 * becomes just `undefined`, losing the fact that "" is also falsy.
 *
 * Until TypeScript supports one-sided type predicates
 * (microsoft/TypeScript#15048), this override should NOT be added.
 *
 * Related: total-typescript/ts-reset#213, microsoft/TypeScript#16655
 */

// --- Setup: proposed BooleanConstructor override ---
interface BooleanConstructor {
  new (value?: unknown): Boolean;
  <T>(value?: T): value is NonFalsy<T>;
  readonly prototype: Boolean;
}

type NonFalsy<T> = T extends false | 0 | "" | null | undefined | 0n ? never : T;

type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2
    ? true
    : false;
type Expect<T extends true> = T;

// --- Tests ---

// string | undefined: else branch should be string | undefined, but TS narrows to just undefined
function testStringUndefined(x: string | undefined) {
  if (Boolean(x)) {
    type _true = Expect<Equal<typeof x, string>>; // correct
  } else {
    // BUG: x is `undefined` but should be `string | undefined` (empty string is falsy)
    // @ts-expect-error
    type _false = Expect<Equal<typeof x, string | undefined>>;
  }
}

// number | null: else branch should be number | null, but TS narrows to just null
function testNumberNull(x: number | null) {
  if (Boolean(x)) {
    type _true = Expect<Equal<typeof x, number>>; // correct
  } else {
    // BUG: x is `null` but should be `number | null` (0 is falsy)
    // @ts-expect-error
    type _false = Expect<Equal<typeof x, number | null>>;
  }
}

// string | number | null | undefined: else branch should keep all four, but TS drops string and number
function testMixed(x: string | number | null | undefined) {
  if (Boolean(x)) {
    type _true = Expect<Equal<typeof x, string | number>>; // correct
  } else {
    // BUG: x is `null | undefined` but should be `string | number | null | undefined`
    // @ts-expect-error
    type _false = Expect<Equal<typeof x, string | number | null | undefined>>;
  }
}
