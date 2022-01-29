// Get Result With Name and Number
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
}

var name = 'Hasan'
var number = 55;
var result = grade(name, number);
console.log(result);