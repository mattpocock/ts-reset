/// <reference path="utils.d.ts" />

interface ReadonlyArray<T> {
	at<I extends number> (index: I): `${I}` extends `-${infer J extends number}`
		? `${TSReset.Subtract<this["length"], J>}` extends `-${number}`
			? undefined
			: this[TSReset.Subtract<this["length"], J>]
		: this[I]
}