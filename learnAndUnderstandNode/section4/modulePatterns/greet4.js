function Greeter() {
    this.greeting = 'Hello World 4'
    this.greet = function() {
        console.log(this.greeting)
    }
}

module.exports = Greeter;