class ReversePromise extends Promise {
    constructor(resolve) {
        super(resolve);
        this.callbackQueue = [];

        setTimeout(() => {
            this.callbackQueue.reverse().forEach((callback) => {
                callback();
            });
        });
    }

    then(callback) {
        this.callbackQueue.push(callback);
        return this;
    }
}

new	ReversePromise((resolve) => {
    console.log(1);
    resolve();
}).then(() => console.log(2))
    .then(() => console.log(3))
    .then(() => console.log(4));
