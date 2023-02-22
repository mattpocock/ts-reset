type AsArray<T> = T[] extends T ? T[] : any[] 
/* 
  The reason I'm using a separate type here called AsArray
  In cases of "Unarray Test" the type looks confusing like: T & (T[] extends T ? T & T[] : any[])
  With AsArray it at least looks like this: T & AsArray<T>
    which is a lot more readable.
  
  In other cases it just shows unknown[], any[] or string[] etc as normal.
*/ 
interface ArrayConstructor {
  isArray<T>(arg: T | T[]): arg is AsArray<T>
}