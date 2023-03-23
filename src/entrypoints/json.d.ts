declare namespace TSReset {
  type JsonValue = string | number | boolean | JsonObject | JsonValue[] | null;

  type JsonObject = { [key: string]: JsonValue };
}
