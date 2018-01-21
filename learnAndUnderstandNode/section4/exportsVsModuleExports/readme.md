> When setting a variable equal to a value, it is a new spot in memory. In other words the reference is broken. 

> Module.exports and exports originally pointed to the same place in memory but because of using '=' the reference is broken

> If I tried to call the function using 'exports =', node would error and say object is not a function. 

> When using exports I can't use '=' but I can change/mutate it

> In greet2, module.exports and exports are the same object, pointing to the same place in memory as we used 'exports.' and the reference was not severed.