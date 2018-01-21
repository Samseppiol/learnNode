const greeting = 'Hello World 5!!!'

function greet() {
    console.log(greeting)
}

// Exposing the function but not the greeting variable!
// Won't have access to the greeting object outside of this module.
module.exports = {
    greet
}