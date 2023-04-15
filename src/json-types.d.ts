export type JsonObject = { [key: string]: JsonValue }
export type JsonArray = JsonValue[]
export type JsonValue = JsonObject | JsonArray | number | string | boolean | null;
