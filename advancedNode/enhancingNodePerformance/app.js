process.env.UV_THREADPOOL_SIZE = 1;
const cluster = require('cluster');

// Is the file being executed in master mode?
if (cluster.isMaster) {
    // Cause index.js to be executed again but in child mode
    cluster.fork();
    cluster.fork();
    cluster.fork();
    cluster.fork();
    cluster.fork();
    cluster.fork();
} else {
    // I'm a child, I'm going go act like a server and do nothing else
    const express = require('express');
    const app = express()
    const crypto = require('crypto')
    app.get('/', (req, res) => {
        crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
            res.send('Hi there');
        });

    });

    app.get('/fast', (req, res) => {
        res.send('This was fast!');
    });

    app.listen(3000)
}

// testing request times with ApacheBench on the cli, default tool in mac os and some linux distros.
// When we run 6 requests concurrently 6 times it actually starts to take longer when executing the tasks because the pbkdf2 part uses the threadpool and so even though we have 6 clusters,
// a maximum of 4 can be processed at any one time, resulting in two having to wait for 2 of the original 4 to finish. 

