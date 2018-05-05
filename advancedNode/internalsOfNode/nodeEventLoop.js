// Fake code to walk thhrough series of operations that occur whenever we start a node process on a machine. 
// node myFile.js 

const pendingTimers = [];
const pendingOSTasks = [];
const pendingOperations = [];

// Pretending to run our file.
// new timers, tasks, operations are recorded from myFile running
myFile.runcContents();
// As soon as this command is executed we enter the node event loop.

function shouldContinue() {
    // NodeJs does three separate checks whether or not the event loop should continue
    // Check #1: Are pending setTimeoutm setInterval, setImmediate?
    // Check #2: Any pending OS tasks? e.g server listening to a port
    // Check #3: Any pending long running operations? Like fs module
    return pendingTimers.length || pendingOSTasks.length || pendingOperations.length
}

// Use a while loop to simulate the event loop.
// Entire body executes in one 'tick'
while(shouldContinue()) {
    // 1) node looks at pendingTimers and sees if any functions are ready to be called. setTimeout and setInterval
    // 2) Node looks at pendingOSTasks and pendingOperations and calls relevant callbacks.
    // 3) Node pauses execution temporarily. Continues when: 
    //  - a new pendingOStask is done.
    //  - a new pendingOperation is done
    //  - a timer is about to complete.

    // 4) Look at pendingTimers. Call any setImmedate.
    // 5) Handle any 'close' events
}


// exit back to terminal