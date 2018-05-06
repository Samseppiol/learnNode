const https = require('https');

const start = Date.now();
const crypto = require('crypto');
const fs = require('fs')

function doRequest() {
    https.request('https://www.google.com', res => {
    res.on('data', () => {});
    res.on('end', () => {
        console.log(Date.now() - start);
    });
    })
    .end();
}

function doHash() {
    crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
        // Calculate how long it takes to calculate a hash
        console.log('Hash:', Date.now() - start);
    });    
}

doRequest();

fs.readFile('multitask.js', 'utf8', () => {
    console.log('fs:', Date.now() - start)
})

doHash();
doHash();
doHash();
doHash();

// The result of the console.logs are: http, hash, fs, hash, hash ,hash
// This is because http does not go to the threadpool it is an OS task so it completes first every time.
// Whereas fs and the hash both go to the threadpool. 
// Even though fs by itself will return in approx 20-30ms, when there are a number of tasks to do, it behaves differently.
// When fs and the hashes first hit the threadpool there are 4 threads to do processing but 5 tasks. The fs task is initiated and sent off to the hard drive.
// The threadpool thinks this task is going to take a long time, so it is now free to do more processing as it has offloaded the fs task.
// The 4th hash function is then put into the previous fs thread, now one of the original threads calculating the hash function has completed the hash function
// and it can now also process more work, so the fs function is put back into the threadpool and completed, hence why http is always first as it doesn't
// go to the threadpool, one hash function always completes second and then the fs function completes.