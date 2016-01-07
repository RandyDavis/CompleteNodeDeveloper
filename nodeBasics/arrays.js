//var grades = [100, 50, 75];
//grades.push(97);

//grades.push(79); // add item to end of array
//console.log(grades);
//
//grades.unshift(23);  // add item to front of array
//console.log(grades);
//
//grades.pop();  // removes and returns last item of an array
//console.log(grades.pop());
//
//
//grades.shift();  // removes and returns the first item in an array
//console.log(grades.shift());

//console.log(grades[0]);  // 100
//
//grades.forEach(function (grade) {  // forEach will iterate over all of the items in the array passed to the callback function
//    //console.log(grade);
//});
//
//console.log(grades.length); // 4


// Exercise:
// totalGrade = 0;  // iterate over an array of grades to get hte totalGrade average
// forEach() {}
// totalGrade / total number of grades
var grades = [100, 50, 75, 97, 76];
grades.push(89)
var totalGrade = 0;

grades.forEach(function (grade) {
    totalGrade += grade;
    console.log(totalGrade);
});

totalGrade = totalGrade / grades.length;

console.log('Average is ' + totalGrade.toFixed());


