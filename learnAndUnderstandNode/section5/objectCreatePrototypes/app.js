let person = {
    firstName: '',
    lastName: '',
    greet: function() {
        return this.firstName + ' ' + this.lastName;
    }
}

let john = Object.create(person)

john.firstName = 'John'
john.lastName = 'Doe'

let jane = Object.create(person)

jane.firstName = 'Jane'
jane.lastName = 'Doe'

console.log(john.greet())
console.log(jane.greet())