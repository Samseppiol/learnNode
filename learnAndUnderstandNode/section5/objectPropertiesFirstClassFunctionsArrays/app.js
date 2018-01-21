// Object properties and methods

const obj = {
    greet: 'Hello'
}

console.log(obj.greet)
console.log(obj['greet'])

const prop = 'greet'
console.log(obj[prop])

const arr = [];

arr.push(function() {
    console.log('Hello world 1')
})

arr.push(function() {
    console.log('Hello world 2')
})

arr.push(function() {
    console.log('Hello world 3')
})

// Looping over the array and calling the functions
arr.forEach(function(item) {
    item()
})

