class Vector {
    constructor(params) {
        this.params = params;
    }

    add(vector) {
        if (!this.isLengthEqual(vector)) {
            return this.showIncorrectLengthError();
        }

        return vector.getParams().map((element, index) => this.params[index] + element);
    }

    subtract(vector) {
        if (!this.isLengthEqual(vector)) {
            return this.showIncorrectLengthError();
        }

        return vector.getParams().map((element, index) => this.params[index] - element);
    }

    dot(vector) {
        if (!this.isLengthEqual(vector)) {
            return this.showIncorrectLengthError();
        }

        return vector.getParams().reduce((result, element, index) => result + this.params[index] * element);
    }

    equals(vector) {
        if (!this.isLengthEqual(vector)) {
            return false;
        }

        return vector.getParams().every((element, index) => this.params[index] === element);
    }

    norm() {
        return Math.sqrt(this.params.reduce((result, element) => result + element * element));
    }

    toString() {
        return '(' + this.params.join(',') + ')';
    }

    getParams() {
        return this.params;
    }

    isLengthEqual(vector) {
        return this.params.length === vector.getParams().length;
    }

    showIncorrectLengthError() {
        return 'Vectors have different lengths.';
    }
}

const a = new Vector([1, 2, 3]);
const b = new Vector([4, 5, 6]);
const c = new Vector([7, 8, 9, 10]);
console.log(a.add(b));
console.log(a.subtract(b));
console.log(a.dot(b));
console.log(a.equals(b));
console.log(a.equals(c));
console.log(a.equals(a));
console.log(a.norm());
console.log(b.norm());
console.log(a.toString());
console.log(b.toString());
console.log(a.add(c));
