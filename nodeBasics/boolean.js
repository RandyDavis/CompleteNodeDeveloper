//var isValid = false;
//
//if (!isValid) {
//    console.log('Data is valid');
//} else {
//    console.log('Data is not valid');
//}


// toggleBoolean() - only return the value if the value is a boolean
var success = false;

function toggleBoolean(val) {
    if (typeof val === 'boolean') {
        //success === false ? success = true : success;
        //success === true ? success = false : success;

        // OR

        return console.log(!val);
    } else {
        console.log('Warning! Not a boolean!');
    }
}

toggleBoolean(success);