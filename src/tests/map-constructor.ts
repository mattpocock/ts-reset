import {doNotExecute, Equal, Expect} from "./utils";

doNotExecute(() => {
    const map = new Map();

    const result = map.get('foo');

    type tests = [Expect<Equal<typeof result, unknown>>];
});