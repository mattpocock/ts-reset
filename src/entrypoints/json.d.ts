declare namespace TSReset {
  type JsonValue = string | number | boolean | JsonValue[] | JsonObject | null;

  type JsonObject = { [key: string]: JsonValue };
}
