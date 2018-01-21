const greet = require('./greet1')

greet()


const greet2 = require('./greet2').greet
greet2()

const greet3 = require('./greet3')
greet3.greet()
greet3.greeting = 'Changed hello world'

// Require is cached in memory, so it is only ever called once.
// Because greet3.greeting was changed above, greet3b will also change as they are pointing
// to the same place in memory.
const greet3b = require('./greet3')
greet3b.greet()


// greet 3 exports the module as New Greeter, automatically creating the object.
// Whereas greet 4 simply exports the function which can be created elsewhere, meaning you can re-use the module,
// and they will not be the same object. 
const greet4 = require('./greet4')
const greeter = new greet4()
greeter.greet()

// Can not manipulate the greeting value given to greet5 outside it's module.
const greet5 = require('./greet5').greet
greet5()
