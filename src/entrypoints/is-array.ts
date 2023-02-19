declare global {
  interface ArrayConstructor {
    isArray(arg: any): arg is unknown[];
  }
}

export {};
