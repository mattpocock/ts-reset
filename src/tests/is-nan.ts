import { doNotExecute } from "./utils";

doNotExecute(() => {
    isNaN(12345);
    isNaN("12345");
    isNaN(NaN);
    isNaN("string");
    isNaN("1.1111");
});