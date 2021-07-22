function runningAverage() {
    let sum = 0;
    let elementsCount = 0;

    return number => {
        sum += number
        elementsCount++;

        return sum / elementsCount;
    }
}

const averageFunction = runningAverage();
console.log(averageFunction(10));
console.log(averageFunction(11));
console.log(averageFunction(12));
