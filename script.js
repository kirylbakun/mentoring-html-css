function Person	(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.introduce = function() {
    return 'My name is ' + this.name + ' and I am '	+ this.age;
};

function myNew(functionConstructor, ...params) {
    const person = Object.create(functionConstructor);
    person.__proto__ = functionConstructor.prototype;
    functionConstructor.apply(person, params);

    return person;
}

const jack = myNew(Person, 'Jack', 40);
console.log(jack.introduce());
const tim = myNew(Person, 'Tim', 10);
console.log(tim.introduce());
