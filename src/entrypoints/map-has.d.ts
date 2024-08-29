/// <reference path="utils.d.ts" />

interface Map<K, V> {
  has(value: K | (TSReset.WidenLiteral<K> & {})): value is K;
}

interface ReadonlyMap<K, V> {
  has(value: K | (TSReset.WidenLiteral<K> & {})): value is K;
}
