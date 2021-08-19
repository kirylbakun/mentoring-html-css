class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = 'CustomError';
    }
}

function throwCustomErrorRandomly() {
    if (Math.random() < 0.5) {
        throw new CustomError('Number is too small.')
    }

    return 'Success!';
}

try {
    console.log(throwCustomErrorRandomly());
} catch (error) {
    if (error instanceof CustomError) {
        console.log(error.name + ': ' + error.message);
    }
}
