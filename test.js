function leapYear(year) {
    if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
        return decision = 'Yes, ' + year + ' is a leapyear';
    } else {
        return decision = 'Yes, ' + year + ' is not a leapyear';
    }

}
var input = 2016;
var result = leapYear(input);
console.log(result);