interface IndexableContext<T = any> {
  [key: PropertyKey]: T;
}
interface Function {
  // call<T, A extends any[], R>(this: (this: T, ...args: A) => R, thisArg: T, ...args: A): R;
  myCall: <T extends IndexableContext<Function>, A extends any[], R>(
    this: (this: T, ...args: A) => R,
    context: T,
    ...args: A
  ) => R;
}
Function.prototype.myCall = function (context, ...args) {
  context =
    context === undefined || context === null ? globalThis : Object(context);
  const key = Symbol();
  Object.defineProperty(context, key, {
    value: this,
    enumerable: false,
    configurable: true,
  });
  const result = context[key](...args);
  delete context[key];
  return result;
};

function method(this: any, a: number, b: number) {
  console.log("This:", this);
  console.log(a, b);
}

const obj = {};

method.myCall(obj, 1, 2);
console.dir(obj);
