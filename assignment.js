/* ১. [ ফাংশন নেম দিতে হবে anaToVori ]: 
একটা ফাংশন এ প্যারামিটার হিসেবে নিবে আনা (ana)। 
তারপর সেটাকে ভরি তে কনভার্ট করে কত মন হয় সেই সংখ্যা রিটার্ন করবে। শুধু সংখ্যাটা রিটার্ন করবে। 
 */

function anaToVori(ana) {
    if (typeof ana != 'number') {
        return 'Sorry! We only accept number';
    }
    if (ana > 0) {
        const voriQuantity = ana / 16;
        return voriQuantity;
    } else {
        return 'Please enter positive number';
    }
}
const anaQuantity = 64;
const voriResult = anaToVori(anaQuantity);
console.log(voriResult);


/* ২. [ ফাংশন নেম দিতে হবে pandaCost]: তিনটা প্যারামিটার লাগবে। ভিডিও ভালো করে দেখবে। 
১ টি সিঙ্গারা এর দাম – ৭ টাকা

১ টি সমুচা এর দাম – ১০ টাকা 

১ টি জিলাপি এর দাম – ১৫ টাকা 
*/

function pandaCost(singara, samucha, jilapi) {
    if (typeof singara != 'number' && typeof samucha != 'number' && typeof jilapi != 'number') {
        return "Please enter quantity as a number";
    } else if (typeof singara != 'number') {
        return "Please enter singara quantity as a number";
    } else if (typeof samucha != 'number') {
        return "Please enter samucha quantity as a number";
    } else if (typeof jilapi != 'number') {
        return "Please enter jilapi quantity as a number";
    }

    if (singara == 0 && samucha == 0 && jilapi == 0) {
        return "We Accept minimum one order";
    } else if (singara >= 0 && samucha >= 0 && jilapi >= 0) {
        const singaraPrice = singara * 7;
        const samuchaPrice = samucha * 10;
        const jilapiPrice = jilapi * 15;
        const totalPrice = singaraPrice + samuchaPrice + jilapiPrice;
        return totalPrice;
    } else {
        return 'Please enter positive number';
    }
}
const singaraQuantity = 5;
const samuchaQuantity = 10;
const jilapiQuantity = 3;
const pandaCostResult = pandaCost(singaraQuantity, samuchaQuantity, jilapiQuantity);
console.log(pandaCostResult);


/* ৩. [ ফাংশন নেম দিতে হবে picnicBudget]: প্যারামিটার হিসাবে নিবে কয়জন পিকিনিক 
এ যাবে সেই সংখ্যা। 
যদি ১০০ বা তার কম যায় তাহলে প্রত্যেক এর জন্য খরচ হবে ৫০০০ টাকা করে। 
যদি ১০০ এর বেশি কিন্তু ২০০ এর কম বা সমান যায় তাহলে প্রথম ১০০ জন এর 
প্রতি জন এর জন্য ৫০০০ টাকা
করে দিতে হবে। আর ১০০ এর বেশি (অর্থাৎ ১০১ নম্বর থেকে) 
যতজন আছে তাদের প্রত্যেক ওই জন্য ৪০০০ টাকা করে দিতে হবে। 
আর যদি ২০০ এর বেশি যায় তাহলে প্রথম ১০০ জন এর প্রতি জন এর জন্য ৫০০০ টাকা করে দিতে হবে। 
আর ১০০ এর বেশি যতজন আছে তাদের প্রত্যেকের জন্য ৪০০০ টাকা করে দিতে হবে। 
এর ২০০ এর বেশি (অর্থাৎ ২০১ নম্বর থেকে) যতজন আছে তাদের প্রত্যেক এর জন্য ৩০০০ টাকা করে দিতে হবে।  
এখন আমি একটা প্যারামিটার দিবো। সেটা যেকোন সংখ্যা হতে পারে। 
সেই সংখ্যা অনুসারে তুমি ফাংশন থেকে রিটার্ন দিবে কতটাকা পিকনিক এর বাজেট হতে হবে। 
ইনপুট প্যারামিটার সংখ্যাটা ১০০ এর কম হতে পারে। ১০০ থেকে ২০০ এর মধ্যে হতে পারে। 
আবার ২০০ এর বেশিও হতে পারে। তাই সব কেইস ভালো করে টেস্ট করে নিবে। 
 */

function picnicBudget(member) {
    if (member == 0) {
        return 'We accept minnimum one member'
    }
    if (typeof member != 'number') {
        return 'Please enter member number as a number'
    }

    let totalCoast = 0;
    if (member > 0 && member <= 100) {
        totalCoast = member * 5000;

    } else if (member > 100 && member <= 200) {
        firstTotalCoast = 100 * 5000;
        secondTotalCoast = (member - 100) * 4000;
        totalCoast = firstTotalCoast + secondTotalCoast;

    } else if (member > 200) {
        firstTotalCoast = 100 * 5000;
        secondTotalCoast = 100 * 4000;
        thirdTotalCoast = (member - 200) * 3000;
        totalCoast = firstTotalCoast + secondTotalCoast + thirdTotalCoast;
    } else {
        return 'Please enter positive number';
    }

    return totalCoast;
}
const totalMember = 309;
const picnicBudgetResult = picnicBudget(totalMember);
console.log(picnicBudgetResult);


/* ৪. [ ফাংশন নেম দিতে হবে oddFriend]: বিস্তারিত ভিডিওতে দেখো।  */

function oddFriend(friendlist) {
    // let friendsLength = friendlist[0].length;
    let myfriend = friendlist[0];
    for (let i = 0; i < friendlist.length; i++) {
        if (typeof(friendlist[i]) == 'number') {
            return 'Please do not add number';
        }

        if ((friendlist[i].length % 2) != 0) {
            // friendsLength = friendlist[i].length;
            myfriend = friendlist[i];
            break;
        }

    }
    if ((myfriend.length % 2) == 0) {
        return 'We do not found odd number friend in array';
    }

    return myfriend //+'\nTotal latter number is: ' + friendsLength;
}
const friendList = ['Soya', 'Jarin', 'Nahid', 'Sumaiya akter', 'Hasan'];
// const friendList = [2, 3, 4, 5];
const oddFriendResult = oddFriend(friendList)
console.log(oddFriendResult);