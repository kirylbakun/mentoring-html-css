function elementsSum(...arguments) {
    let result = arguments.length ? arguments.reduce((sum, currentElement) => sum + currentElement) : 0;

    const sumFn = (...argumentsFn) => {
        const sumOfArgs = argumentsFn.length ? argumentsFn.reduce((sum, currentElement) => sum + currentElement) : 0;
        result += sumOfArgs;

        return sumFn;
    };

    sumFn.toString = () => result;

    return sumFn;
}

console.log(elementsSum(1)(2)(3)(4));
console.log(elementsSum(1, 3, 7)(2)(3, 9)(4, 8, 1, 6));
console.log(elementsSum(1)()(2)());
console.log(elementsSum()()()());
