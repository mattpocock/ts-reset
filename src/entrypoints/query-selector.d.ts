type Split<S extends string, D extends string> = S extends `${infer T}${D}${infer U}` ? [T, ...Split<U, D>] : [S];
type TakeLast<V> = V extends [] ? never : V extends [string] ? V[0] : V extends [string, ...infer R] ? TakeLast<R> : never;
type TrimLeft<V extends string> = V extends ` ${infer R}` ? TrimLeft<R> : V;
type TrimRight<V extends string> = V extends `${infer R} ` ? TrimRight<R> : V;
type Trim<V extends string> = TrimLeft<TrimRight<V>>;
type StripModifier<V extends string, M extends string> = V extends `${infer L}${M}${infer A}` ? L : V;
type StripModifiers<V extends string> = StripModifier<StripModifier<StripModifier<StripModifier<V, '.'>, '#'>, '['>, ':'>;
type TakeLastAfterToken<V extends string, T extends string> = StripModifiers<TakeLast<Split<Trim<V>, T>>>;
type GetLastElementName<V extends string> = TakeLastAfterToken<TakeLastAfterToken<TakeLastAfterToken<TakeLastAfterToken<TakeLastAfterToken<V, ' '>, '>'>, '+'>, '~'>, '||'>;
type GetEachElementName<V, L extends string[] = []> = 
    V extends [] 
        ? L 
        : V extends [string] 
        ? [...L, GetLastElementName<V[0]>] 
        : V extends [string, ...infer R] 
        ? GetEachElementName<R, [...L, GetLastElementName<V[0]>]> 
        : [];
type GetElementNames<V extends string> = GetEachElementName<Split<V, ','>>;
type ElementByName<V extends string> = 
    V extends keyof HTMLElementTagNameMap 
        ? HTMLElementTagNameMap[V] 
        : V extends keyof SVGElementTagNameMap 
        ? SVGElementTagNameMap[V]
        : V extends keyof MathMLElementTagNameMap
        ? MathMLElementTagNameMap[V]
        : V extends keyof HTMLElementDeprecatedTagNameMap
        ? HTMLElementDeprecatedTagNameMap[V]
        : Element;
type MatchEachElement<V, L extends Element | null = null> = 
    V extends [] 
        ? L 
        : V extends [string] 
        ? L | ElementByName<V[0]> 
        : V extends [string, ...infer R] 
        ? MatchEachElement<R, L | ElementByName<V[0]>> 
        : L;
type MatchEachElements<V, L extends Element = Element> = 
    V extends []
        ? NodeListOf<L>
        : V extends [string]
        ? NodeListOf<ElementByName<V[0]>>
        : V extends [string, ...infer R]
        ? NodeListOf<MatchEachElement<R, ElementByName<V[0]>>>
        : NodeListOf<L>;

type QueryResult<T extends string> = MatchEachElement<GetElementNames<T>>;
type QueryAllResult<T extends string> = MatchEachElements<GetElementNames<T>>;

interface ParentNode extends Node {
    /**
     * Returns the first element that is a descendant of node that matches selectors.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/querySelector)
     */
    querySelector<T extends string>(selectors: T): QueryResult<T>;
    /**
     * Returns all element descendants of node that match selectors.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/querySelectorAll)
     */
    querySelectorAll<T extends string>(selectors: T): QueryAllResult<T>;
}