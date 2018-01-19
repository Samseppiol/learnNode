// Pass by value 
function change(b) {
    b = 2;
}

let a = 1
change(a)
// Will result in a remaining 1 as changing b will make it point to another spot in memory
console.log(a)

// Pass by reference

function changeObj(d) {
    d.prop1 = function() {};
    d.prop2 = {}
}

// Whatever we do to D affects c as well as they are passsed by reference and pointing to the same place in memory.
let c = {}
c.prop1 = {}
changeObj(c)
console.log(c)


// When passing an object/non-primitive it points to the same place in memory, therefore will change the original
// value, unlike a primitive which will point to a new place in memory
function changeObj2(x) {
    x.prop1 = {}
    x.prop2 = function() {
        console.log('Hello')
    }
}

let z = {}
changeObj2(z)
console.log(z)

