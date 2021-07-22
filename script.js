function elementsSum(...arguments) {
    const sumOfArgsL1 = arguments.length ? arguments.reduce((sum, currentElement) => sum + currentElement) : 0;

    return (...arguments) => {
        const sumOfArgsL2 = arguments.length
            ? arguments.reduce((sum, currentElement) => sum + currentElement) + sumOfArgsL1 : sumOfArgsL1;

        return (...arguments) => {
            const sumOfArgsL3 = arguments.length
                ? arguments.reduce((sum, currentElement) => sum + currentElement) + sumOfArgsL2 : sumOfArgsL2;

            return (...arguments) => arguments.length
                ? arguments.reduce((sum, currentElement) => sum + currentElement) + sumOfArgsL3 : sumOfArgsL3;
        }
    }
}

console.log(elementsSum(1)(2)(3)(4));
console.log(elementsSum(1, 3, 7)(2)(3, 9)(4, 8, 1, 6));
console.log(elementsSum(1)()(2)());
console.log(elementsSum()()()());
