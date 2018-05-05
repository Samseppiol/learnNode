// Is node single threaded? No, the event loop is but some node libraries are not.
process.env.UV_THREADPOOL_SIZE = 5;

const crypto = require('crypto');


const start = Date.now();
crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    // Calculate how long it takes to calculate a hash
    console.log('1:', Date.now() - start);
});

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    // Calculate how long it takes to calculate a hash
    console.log('2:', Date.now() - start);
});

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    // Calculate how long it takes to calculate a hash
    console.log('3:', Date.now() - start);
});

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    // Calculate how long it takes to calculate a hash
    console.log('4:', Date.now() - start);
});

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    // Calculate how long it takes to calculate a hash
    console.log('5:', Date.now() - start);
});