import { ClassDecorator, Logger } from "../decorators/logger";

@ClassDecorator
export default class Calculator {
  @Logger
  add(a: number, b: number) {
    return a + b;
  }

  @Logger
  subtract(a: number, b: number) {
    return a - b;
  }
}
