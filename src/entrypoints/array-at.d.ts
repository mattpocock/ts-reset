/// <reference path="utils.d.ts" />

interface ReadonlyArray<T> {
	at<const I extends number>(
	  index: I
	): TSReset.Equal<I, number> extends true
	  ? T | undefined
	  : `${I}` extends `-${infer J extends number}`
	  ? `${TSReset.Subtract<this["length"], J>}` extends `-${number}`
		? undefined
		: this[TSReset.Subtract<this["length"], J>]
	  : this[I];
}