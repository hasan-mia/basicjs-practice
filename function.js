// ==========Get Multiplication Table of any number========//
//=================================================//
function multiplicatonTable(number) {
    for (var i = 1; i <= 10; i++) {
        var result = i * number;
        console.log(number + ' X ' + i + ' = ' + result);
    }
}
var input = 10; // change this number to get which number of multiplication table you want
multiplicatonTable(input);

// ==========Get LowerCase Name====================//
//=================================================//
function lowercase(name) {
    var casechange = name.toLowerCase(); // toUpperCase(); use it to get uppercase
    return casechange;
}
var input = 'Hasan rafi'; // Change the name to get your name lowercase
var result = lowercase(input)
console.log(result);

// ==========Get Get Full Function  Name===========//
//=================================================//
function fullName(fastName, lastName) {
    var fullname = fastName + ' ' + lastName;
    return fullname;
}
var fastName = 'Hasan'; // Change the firstName
var lastName = 'Rafi' // Change the lastName
var result = fullName(fastName, lastName);
console.log('Your Full Name is : ' + result);

// ==========Get square of any Number==============//
//=================================================//
function mathSquare(number) {
    var square = Math.pow(number, 2) // You can use number * number; instead of Math.pow(number, 2) 
    return square;
}
var number = 6; // Change the number
var result = mathSquare(number);
console.log(result)

// ==========Get Result With Name and Number=======//
//=================================================//
function grade(name, number) {
    if (number >= 80 && number <= 100) {
        var point = name + ': A+'
    } else if (number >= 70 && number < 80) {
        var point = name + ': A'
    } else if (number >= 60 && number < 70) {
        var point = name + ': A-'
    } else if (number >= 50 && number < 60) {
        var point = name + ': B'
    } else if (number >= 40 && number < 50) {
        var point = name + ': C'
    } else if (number >= 33 && number < 40) {
        var point = name + ': D'
    } else if (number < 33) {
        var point = name + ': F'
    }
    return point;
}

var inputName = 'Hasan' // Change this name
var inputNumber = 88; // Change this number 
var result = grade(inputName, inputNumber);
console.log(result);


// ==========Get Year is A lepyear or Not==========//
//=================================================//
function leapYear(year) {
    if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
        return decision = 'Yes, ' + year + ' is a leapyear';
    } else {
        return decision = 'No, ' + year + ' is not a leapyear';
    }

}
var input = 2200;
var result = leapYear(input);
console.log(result);

// ========Get Factorial Number of Any Number======//
//=================================================//
function getFactorial(number) {
    let factorial = 1
    for (let i = 1; i <= number; i++) {
        factorial = factorial * i;
    }
    return factorial;

}
var input = 3; // Change this number
var result = getFactorial(input);
console.log(result);

// ========Simple Food Order Confirmation==========//
//=================================================//
function foodDelivery(foodname, quantity, price, discountpar) {
    if (foodname.toLowerCase() == 'pizza' && quantity <= 30 && quantity >= 1) { // if quantity is gatter than 30 & minium 1
        if (quantity > 10) {
            var total = quantity * price;
            var discount = total * discountpar;
            var discountPrice = total - discount;
            var message = foodname + ' Order Placed Successfully' + ' Your Discount price is' + ' $' + discountPrice;
            return message;
        } else {
            var total = quantity * price;
            var message = foodname + ' Order Placed Successfully' + ' Your price is' + ' $' + total;
            return message;
        }

    } else if (quantity > 30) {
        message = 'Sorry! Out of Stock';
        return message;
    } else if (quantity <= 0) {
        message = 'Sorry Please Order minimum atleast one';
        return message;
    } else {
        message = 'Sorry We only sale pizza';
        return message;
    }
}
// Change this value
var foodName = 'pIzza'; // Give Food Name
var foodPrice = 40; // give Price
var foodQuantity = 10; // Give quantity you want, if quantity is more than 10, you will get 10% off
var discountParcent = 10 / 100; // How much give you off as percnet ( this 10% example)
var result = foodDelivery(foodName, foodQuantity, foodPrice, discountParcent);
console.log(result);

// ========Celcious To Fahrenheit==================//
//=================================================//
// ??F = (9/5 ?? ??C) + 32
function celsiusToFahrenheit(celcious) {
    var ferhenheite = 32 + (celcious * 1.8);
    return ferhenheite;
}
var temperature = 20;
var result = celsiusToFahrenheit(temperature);
console.log(result);

// ===========Fahrenheit To Celcious===============//
//=================================================//
// ??C = (??F - 32) ?? 5/9
function FahrenheitTocelsius(ferhenheite) {
    var celcious = (ferhenheite - 32) * (5 / 9);
    return Math.floor(celcious); // Math.ceil 
}
var temperature = 55;
var result = FahrenheitTocelsius(temperature);
console.log(result);
// ===========Simple Interest======-===============//
//=================================================//
//I = pnr

function interest(money, year, parcnet) {
    var profite = money * year * parcnet;
    var total = money + profite;
    return total;
}
var principle = 100; // Principle Money
var time = 5; // Time of loan
var rate = 10 / 100; // Rate of lone per year;
var result = interest(principle, time, rate);
console.log(result);

// ===========Count Vowel From Sentence============//
//=================================================//
function countVowel(sentence) {
    let count = 0
    let vowels = []
    for (let i = 0; i < sentence.length; i++) {
        letter = sentence[i].toLowerCase();
        if (letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u') {
            count++
            vowels.push(letter);
        }
    }
    return count + '\n' + 'Vowels are: ' + vowels;
}

const string = 'I am lazy person of the world'
const result = countVowel(string);
console.log(result);