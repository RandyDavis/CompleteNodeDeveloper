//function greetMaker (name) {
//    function greet () {
//        console.log('Hello ' + name + '!');
//    }
//    return greet;
//}
//
//var greetRandy = greetMaker('Randy');
//greetRandy();
//greetRandy();
//greetRandy();
//
//var greetWorld = greetMaker('World');
//greetWorld();


// EXERCISE:

/* createAdder(baseNumber)

    return function(numberToAdd)

    var addTen = createAdder(10);
    console.log(addTen(2)); // 12
    console.log(addTen(0)); // 10

*/

function createAdder(baseNumber) {
    return function (numberToAdd) {
        return baseNumber + numberToAdd;
    }
}

var addTen = createAdder(10);
console.log(addTen(2));
console.log(addTen(0));
