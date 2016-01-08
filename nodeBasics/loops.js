//var i = 0;
//var countLimit = 8;
//
//while (i < countLimit) {
//    console.log('while: ' + i++);
//};
//
//for (i = 0; i < countLimit; i++) {
//    console.log('for: ' + i);
//};


// EXERCISE:

var startingPoint = 10;
var stoppingPoint = 0;

// function countDownWhile(startingPoint, stoppingPoint)
function countDownWhile (startingPoint, stoppingPoint) {
    while (stoppingPoint <= startingPoint) {
        console.log('Count Down While: ' + startingPoint--);
    }
}

countDownWhile(startingPoint, stoppingPoint);

// function countDownFor(startingPoint, stoppingPoint)
function countDownFor(startingPoint, stoppingPoint) {
    for (var i = stoppingPoint; i <= startingPoint; startingPoint--) {
        console.log('Count Down For: ' + startingPoint);
    }
}

countDownFor(startingPoint, stoppingPoint);