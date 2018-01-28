const Emitter = require('events')
const eventConfig = require('./config').events


const emtr = new Emitter();

emtr.on(eventConfig.GREET, function() {
    console.log('Hello world')
})


emtr.on(eventConfig.GREET, function() {
    console.log('A greeting has occured')
})

emtr.emit(eventConfig.GREET)