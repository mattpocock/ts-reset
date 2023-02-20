import { doNotExecute } from "./utils";

doNotExecute(() => {
    interface Obj {
        key: string;
    }

    type R1 = Omit<Obj, 'key2'>
});