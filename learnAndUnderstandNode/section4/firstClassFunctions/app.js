// Function Statement
function greet() {
    console.log('Hey')
}

greet()

// Passing a function to a function
// Functions are first class
function logGreeting(fn) {
    fn()
}

logGreeting(greet)


// Function Expression
const greetMe = function() {
    console.log('Im a function expression')
}

greetMe()

logGreeting(greetMe)


// Function expression on the fly 
logGreeting(function() {
    console.log('Im a function expression on the fly!')
})