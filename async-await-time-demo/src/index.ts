function createPromiseTask() {
  let returnResolve: (value?: unknown) => void;
  const promise = new Promise((resolve) => {
    returnResolve = resolve;
  });
  return { returnResolve: returnResolve!, promise };
}

async function asyncTask() {
  const { returnResolve, promise } = createPromiseTask();
  setTimeout(() => {
    returnResolve("Hello World Async");
  });
  const value = await promise;
  console.log(value);
}

function syncTask() {
  console.log("Hello World Sync");
}

function main() {
  asyncTask();
  syncTask();
  Promise.resolve("Hello World micro task").then((value) => console.log(value));
}

main();
