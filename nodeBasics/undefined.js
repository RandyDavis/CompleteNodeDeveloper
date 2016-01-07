//var name = 'Randy';
//
//name = undefined;
//
////console.log(name);
//
//function doesNothing (age) {
//    console.log(age);
//}
//
////console.log(doesNothing());
//doesNothing();


//var name = undefined;
//
//if (typeof x === 'undefined') {
//    console.log('x is undefined')
//}



// function greetUser(name) - if name exist, greet user, otherwise say "hello world!"
var name = 'Randy';

function greetUser(name) {
    if (typeof name === 'undefined') {
        console.log('Hello world!');
    } else {
        return console.log('Hi ' + name + '!');
    }
}

greetUser(name);
greetUser();