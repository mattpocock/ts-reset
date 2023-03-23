/// <reference path="json.d.ts" />

interface JSON {
  /**
   * Converts a JavaScript Object Notation (JSON) string into an object.
   * @param text A valid JSON string.
   */
  parse(text: string): TSReset.JsonValue;

  /**
   * Converts a JavaScript Object Notation (JSON) string into an object.
   * @param text A valid JSON string.
   * @param reviver A function that transforms the results. This function is called for each member of the object.
   * If a member contains nested objects, the nested objects are transformed before the parent object is.
   */
  parse<A = unknown>(
    text: string,
    reviver: <K extends string>(
      this: TSReset.JsonHolder<K, A>,
      key: K,
      value: TSReset.JsonAlgebra<A>,
    ) => A,
  ): A;
}
