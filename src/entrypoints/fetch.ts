declare global {
  interface Body {
    json(): Promise<unknown>;
  }
}

export {};
