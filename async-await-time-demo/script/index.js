"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function createPromiseTask() {
    let returnResolve;
    const promise = new Promise((resolve) => {
        returnResolve = resolve;
    });
    return { returnResolve: returnResolve, promise };
}
function asyncTask() {
    return __awaiter(this, void 0, void 0, function* () {
        const { returnResolve, promise } = createPromiseTask();
        setTimeout(() => {
            returnResolve("Hello World Async");
        });
        const value = yield promise;
        console.log(value);
    });
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
