type Constructor<T extends {} = {}> = new (...args: any[]) => T;

function withDeleteFlag<T extends Constructor>(Base: Constructor) {
  return class extends Base {
    delete: boolean = false;
  }
}
