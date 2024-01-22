/**
 *
 * @param target class constructor
 * @param propertyKey function name
 * @param descriptor function descriptor
 * @returns
 */
export function Logger(
  target: any,
  propertyKey: PropertyKey,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;
  console.log({
    target,
    propertyKey,
    descriptor,
  });
  descriptor.value = function (...args: any[]) {
    console.log(`Arguments: ${args}`);
    const result = originalMethod.apply(this, args);
    console.log(`Result: ${result}`);
    return result;
  };
  return descriptor;
}

/**
 * @param target 
 * @returns 
 */
export function ClassDecorator(target: any) {
  console.log('Target:', target);
}
