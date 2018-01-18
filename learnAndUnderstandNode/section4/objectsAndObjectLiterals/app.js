// Object literal
const person = {
    firstName: 'John',
    lastName: 'Doe',
    greet: function() {
        console.log(`Hello ${this.firstName} ${this.lastName}`)
    }
}

person.greet()

// Optional way of accessing an object property
console.log(person['firstName'])