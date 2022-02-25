
function receivesAFunction(callback){
    callback();
}
// The returnsANamedFunction function should:

// take no arguments
// return a named function

let nameFunction = (receivesAFunction)

function returnsANamedFunction(){
        return (nameFunction);
}
// The returnsAnAnonymousFunction function should:

// take no arguments
// return an anonymous function

function returnsAnAnonymousFunction () {
    return function() {
        console.log()
    };
}
