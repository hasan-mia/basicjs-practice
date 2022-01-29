//// ==========Get Multiplication Table of any number========//
////=================================================//
function multiplicatonTable(number) {
    for (var i = 1; i <= 10; i++) {
        var result = i * number;
        console.log(result);
    }
    return;
}
var number = 55; // change this number to get which number of multiplication table you want
var result = multiplicatonTable(number);

//// ==========Get LowerCase Name====================//
////=================================================//
function lowercase(name) {
    var result = name.toLowerCase(); // toUpperCase(); use it to get uppercase
    return console.log(result);
}
var name = 'Hasan rafi'; // Change the name to get your name lowercase
var result = lowercase(name)

//// ==========Get Get Full Function  Name===========//
////=================================================//
function fullname(fastName, lastName) {
    var result = fastName + ' ' + lastName;
    return console.log('Your Full Name is : ' + result);

}
var fastName = 'Hasan'; // Change the firstName
var lastName = 'Rafi' // Change the lastName
var result = fullname(fastName, lastName);

//// ==========Get square of any Number==============//
////=================================================//
function square(number) {
    var result = Math.pow(number, 2) // You can use number * number; instead of Math.pow(number, 2) 
    return console.log(result);
}
var number = 4; // Change the number
var result = square(number);


//// ==========Get Result With Name and Number=======//
////=================================================//
function grade(name, number) {
    if (number >= 80 && number <= 100) {
        console.log(name + ': A+')

    } else if (number >= 70 && number < 80) {
        console.log(name + ': A')
    } else if (number >= 60 && number < 70) {
        console.log(name + ': A-')
    } else if (number >= 50 && number < 60) {
        console.log(name + ': B')
    } else if (number >= 40 && number < 50) {
        console.log(name + ': C')
    } else if (number >= 33 && number < 40) {
        console.log(name + ': D')
    } else if (number < 33) {
        console.log(name + ': F')
    }
    return;
}

var name = 'Hasan' // Change this name
var number = 55; // Change this number 
var result = grade(name, number);
console.log(result);