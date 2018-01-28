const Emitter = require('./emitter')

const emtr = new Emitter();

emtr.on('greet', function() {
    console.log('Hello world')
})


emtr.on('greet', function() {
    console.log('A greeting has occured')
})

emtr.emit('greet')