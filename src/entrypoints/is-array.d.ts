interface ArrayConstructor {
  isArray<T>(arg: T | T[]): arg is T[] extends T ? T[] : any[] 
}