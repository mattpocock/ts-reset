interface ObjectConstructor {
  /**
   * Returns the names of the enumerable string properties and methods of an object.
   * @param o Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.
   */
  keys<T extends {}>(
    o: T
  ): T extends any[]
    ? string[]
    : T extends Record<any, any>
    ? object extends T
      ? string[]
      : (keyof T & string)[]
    : string[];
}
