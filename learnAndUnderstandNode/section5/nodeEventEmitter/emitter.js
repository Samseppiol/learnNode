function Emitter() {
    this.events = {};
}

Emitter.prototype.on = function(type, listener) {
    // If the property exists great, if not make it a new array
    this.events[type] = this.events[type] || [];
    // Push the listener function into the array
    this.events[type].push(listener)
}

// Emitting the event 
Emitter.prototype.emit = function(type) {
    if (this.events[type]) {
        this.events[type].forEach(listener => {
            listener();
        });
    }
}


module.exports = Emitter;