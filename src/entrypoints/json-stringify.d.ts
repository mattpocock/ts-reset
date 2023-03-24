/// <reference path="json.d.ts" />

interface JSON {
  /**
   * Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
   * @param value A JavaScript value, usually an object or array, to be converted.
   * @param replacer An array of strings and numbers that acts as an approved list for selecting the object properties that will be stringified.
   * @param space Adds indentation, white space, and line break characters to the return-value JSON text to make it easier to read.
   */
  stringify(
    value: unknown,
    replacer?: (string | number)[] | null | undefined,
    space?: string | number | undefined,
  ): string | undefined;

  /**
   * Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
   * @param value A JavaScript value, usually an object or array, to be converted.
   * @param replacer A function that transforms the results.
   * @param space Adds indentation, white space, and line break characters to the return-value JSON text to make it easier to read.
   */
  stringify<A>(
    value: A,
    replacer: (
      this: TSReset.JsonComposite<A>,
      key: string,
      value: TSReset.ToJson<A>,
    ) => TSReset.JsonValueF<A>,
    space?: string | number | undefined,
  ): string;

  /**
   * Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
   * @param value A JavaScript value, usually an object or array, to be converted.
   * @param replacer A function that transforms the results.
   * @param space Adds indentation, white space, and line break characters to the return-value JSON text to make it easier to read.
   */
  stringify<A>(
    value: A,
    replacer: (
      this: TSReset.JsonComposite<A>,
      key: string,
      value: TSReset.ToJson<A>,
    ) => TSReset.JsonValueF<A> | undefined,
    space?: string | number | undefined,
  ): string | undefined;
}
