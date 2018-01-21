// Calling utilities module
const util = require('util')

const name = 'Jack'

const greeting = util.format('Hello, %s', name)
util.log(greeting)
