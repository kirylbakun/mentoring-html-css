class MyPromise extends Promise {
    syncThen(callback) {
        callback();

        return this;
    }
}

new MyPromise((resolve) => {
    console.log(1);
    resolve();
}).syncThen(() => {
    console.log(2);
}).then(() => {
    console.log(3);
})
console.log(4);
