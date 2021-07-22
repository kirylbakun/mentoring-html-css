function NamedOne(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

    Object.defineProperty(this, 'fullName', {
        get() {
            return this.firstName + ' ' + this.lastName
        },
        set(fullName) {
            const nameData = fullName.trim().split(' ');

            if (nameData.length === 2 && nameData[0] && nameData[1]) {
                this.firstName = nameData[0];
                this.lastName = nameData[1];
            } else {
                console.log('Error: Incorrect Last Name format.')
            }
        }
    });
}

const namedOne = new NamedOne('Naomi', 'Wang');
console.log(namedOne.firstName);
console.log(namedOne.lastName);
console.log(namedOne.fullName);
console.log('Trying to update full name with correct value...');
namedOne.fullName = 'John Doe';
console.log(namedOne.firstName);
console.log(namedOne.lastName);
console.log(namedOne.fullName);
console.log('Trying to update full name with incorrect value...');
namedOne.fullName = 'Tim';
console.log(namedOne.firstName);
console.log(namedOne.lastName);
console.log(namedOne.fullName);
console.log('Trying to update first name...');
namedOne.firstName = 'Jack';
console.log(namedOne.fullName);
