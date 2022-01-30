//// ==========Get Multiplication Table of any number========//
////=================================================//
// function multiplicatonTable(number) {
//     for (var i = 1; i <= 10; i++) {
//         var result = i * number;
//         console.log(result);
//     }
// }
// var input = 10; // change this number to get which number of multiplication table you want
// multiplicatonTable(input);

//// ==========Get LowerCase Name====================//
////=================================================//
// function lowercase(name) {
//     var casechange = name.toLowerCase(); // toUpperCase(); use it to get uppercase
//     return casechange;
// }
// var input = 'Hasan rafi'; // Change the name to get your name lowercase
// var result = lowercase(input)
// console.log(result);

//// ==========Get Get Full Function  Name===========//
////=================================================//
// function fullName(fastName, lastName) {
//     var fullname = fastName + ' ' + lastName;
//     return fullname;
// }
// var fastName = 'Hasan'; // Change the firstName
// var lastName = 'Rafi' // Change the lastName
// var result = fullName(fastName, lastName);
// console.log('Your Full Name is : ' + result);

//// ==========Get square of any Number==============//
////=================================================//
// function mathSquare(number) {
//     var square = Math.pow(number, 2) // You can use number * number; instead of Math.pow(number, 2) 
//     return square;
// }
// var number = 6; // Change the number
// var result = mathSquare(number);
// console.log(result)

//// ==========Get Result With Name and Number=======//
////=================================================//
// function grade(name, number) {
//     if (number >= 80 && number <= 100) {
//         var point = name + ': A+'
//     } else if (number >= 70 && number < 80) {
//         var point = name + ': A'
//     } else if (number >= 60 && number < 70) {
//         var point = name + ': A-'
//     } else if (number >= 50 && number < 60) {
//         var point = name + ': B'
//     } else if (number >= 40 && number < 50) {
//         var point = name + ': C'
//     } else if (number >= 33 && number < 40) {
//         var point = name + ': D'
//     } else if (number < 33) {
//         var point = name + ': F'
//     }
//     return point;
// }

// var inputName = 'Hasan' // Change this name
// var inputNumber = 88; // Change this number 
// var result = grade(inputName, inputNumber);
// console.log(result);