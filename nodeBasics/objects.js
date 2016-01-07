//var person = {
//    gender: 'male',
//    'eyeColor': 'brown'
//};
//
//person['firstName'] = 'Randy';
//person.lastName = 'Davis';
//person.age = 24;
//
//delete person.age;
//console.log(person);
//
//function greetUser (person) {
//    console.log('Hello ' + person.firstName + ' ' + person['lastName'] + '!');
//}
//
//greetUser(person);



var pet = {
    name: 'Benjii',
    type: 'komodo dragon'
}

function printPet (pet) {
    console.log('You own a ' + pet.type + ' by the name of ' + pet.name + '.');
}

printPet(pet);