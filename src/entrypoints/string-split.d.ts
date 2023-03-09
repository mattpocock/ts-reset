interface String {
	split<Splitter extends string, Limit extends number>(string: Splitter, limit?: Limit): Limit extends 0 ? []
		: Splitter extends '' ? string[]
		: [string, ...string[]]
}
