/// <reference path="utils.d.ts" />

interface ReadonlyArray<T> {
	/**
	 * Returns the item located at the specified index.
	 * @param index The zero-based index of the desired code unit. A negative index will count back from the last item.
	 */
	at<I extends number> (index: I): `${I}` extends `-${infer J extends number}`
		? `${TSReset.Subtract<this["length"], J>}` extends `-${number}`
			? undefined
			: this[TSReset.Subtract<this["length"], J>]
		: this[I]
}