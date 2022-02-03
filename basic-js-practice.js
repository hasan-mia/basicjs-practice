/* ৭. তোমাকে যদি বলে একটা while লুপ দিয়ে ৭ থেকে ১৯ পর্যন্ত যতগুলা বিজোড় সংখ্যা আছে সেগুলা দেখাতে। 
তুমি কি সেটা দেখাতে পারবে? পারলে সেই কোড লিখে ফেলো। */
// While Loop
let n = 6;
while (n <= 19) {
    n = n + 2
    console.log(n)
}
// For Loop
for (let i = 7; i < 19; i += 2) {
    console.log(i)
}

/* ৮. তোমাকে যদি বলা হয় তুমি একটা array ডিক্লেয়ার করবে। 
এবং সেটার মধ্যে কয়টা উপাদান আছে সেটা বের করবে হবে। 
সেই array এর এর মধ্যে চতুর্থ পজিশন এর উপাদান চেইঞ্জ করতে হবে। 
array এর মধ্যে দুইটা উপাদান যোগ করতে হবে। 
এবং একটা উপাদান কে বের করে দিতে হবে। তুমি কি সেটা করতে পারবে।  */

let array = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
console.log(array);
/* ==count total array== */
console.log(array.length);
/* ==chnage value x instead of d at 4th position== */
array[4] = 'x';
/* or
array.indexOf('d') */
console.log(array);

/* 
৯. তুমি কি একটা ফর লুপ দিয়ে কোন একটা array এর সবগুলা উপাদানকে দেখাতে পারবে। 
সেটা রেগুলার for লুপ হোক বা for of হোক। হলে সেই স্টাইলে একটা কোড লিখে ফেলো। 
 */
const array = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);

}

for (const item of array) {
    console.log(item);
}

/* ১০. তোমাকে যদি বলা হয়। একটা array এর মধ্যে ৮০ 
এর চাইতে বড় সংখ্যা থাকলে সেগুলাকে console log করে দেখাতে সেটা কি তুমি পারবে? 
তাহলে তুমি সেই কোড করে ফেলো 
 */
const x = [50, 60, 70, 80, 90]
for (let i = 0; i < x.length; i++) {
    if (x[i] > 80) {
        console.log(x[i])
    }
}

/* ১২. একটা অবজেক্ট ডিক্লেয়ার করবে। সেটাতে তিনটা প্রপার্টি থাকবে। 
এবং কোন একটা প্রোপার্টি এর মান চেইঞ্জ করবা। 
 */

let student = { name: 'Nahid', roll: 10101, result: 5.00 };
student.name = 'chuya';
student.roll = 10102;
student.result = 4.94;
console.log(student);

// ===Add Result====
function changeResult(name, roll, grade) {
    let student = { name: name, roll: roll, result: grade };
    return student;
}
let name = 'chuya';
let roll = 10102;
let grade = 4.94;
let result = changeResult(name, roll, grade);
console.log(result);

/* ১. সিম্পল একটা ফাংশন লিখতে হবে। যেটার নাম হবে feetToInch এবং এই ফাংশন ইনপুট হিসেবে নিবে feet 
আর রিটার্ন করবে inch । অর্থাৎ এই ফাংশনকে কোন একটা ফিট বলে দিলে সে রিটার্ন হিসেবে বলে দিবে কত ইঞ্চি হয়। 
 */

function feetToInch(feet) {
    const converted = feet * 12;
    return converted;
}
const feet = 1;
const result = feetToInch(feet);
console.log(result);

/* ২. একদম ফাংশন এর নাম হুবহু centimeterToMeter নাম দিয়ে একটা ফাংশন লিখবে। 
এই ফাংশনে ইনপুট হিসাবে কেউ সেন্টিমিটার দিবে আর সেই সেন্টিমিটার কে মিটার এ কনভার্ট করে রেজাল্ট রিটার্ন করবে। 
 */
function centimeterToMeter(cm) {
    const meeter = cm / 100;
    return meeter;
}
const cm = 100;
const result = centimeterToMeter(cm);
console.log(result);

/* ৩. আরেকটা ফাংশন লিখবে যেটার নাম লিখবে। যেই ফাংশনের নাম হবে paperRequirements 
এই ফাংশনের প্যারামিটার হিসেবে তিনটা প্যারামিটার হবে। প্রথম প্যারামিটার হবে তুমি প্রথম বই কত কপি ছাপাতে চাও। 
সেকেন্ড প্যারামিটার হবে তুমি সেকেন্ড বই কত কপি ছাপাতে চাও। আর থার্ড প্যারামিটার হবে তুমি থার্ড বই কত কপি ছাপাতে চাও। 
অর্থাৎ কোন বই এর কত কপি ছাপানো হবে সেটাই প্যারামিটার হিসেবে নিবে। 
এইবার ভালো করে খেয়াল করো।  
প্রথম বই ছাপানোর জন্য পৃষ্ঠা লাগবে ১০০ টা 
সেকেন্ড বই ছাপানোর জন্য পৃষ্ঠা লাগবে ২০০ টা 
তৃতীয় বই ছাপানোর জন্য পৃষ্ঠা লাগবে ৩০০ টা 
এখন তোমার কাজ হচ্ছে paperRequirements নামক ফাংশন লিখে ফেলা যাতে। 
সেই ফাংশনকে কল করে কোন বই এর কত কপি লাগবে বলে দিবে প্যারামিটার হিসেবে।
আর ফাংশন হিসাব করে বলে দিবে তোমার সর্বমোট কতপৃষ্ঠা কাগজ লাগবে। 
উত্তর হিসেবে সংখ্যা রিটার্ন করবে। */

function paperRequirements(first, second, third) {
    const firstBook = first * 100;
    const secondBook = second * 200;
    const thirdBook = third * 300;
    const totalPages = firstBook + secondBook + thirdBook;
    return totalPages;
}
const first = 10;
const second = 20;
const third = 30;
const result = paperRequirements(first, second, third);
console.log(result);

/* ৪. একটা ফাংশন লিখবে। এই ফাংশনের নাম হবে bestFriend তারপর সেই ফাংশনে 
ইনপুট প্যারামিটার হিসেবে একটা array নিবে। সেই array এর মধ্যে তোমার সব ফ্রেন্ডের নাম থাকবে। 
এখন তোমার কাজ হচ্ছে যে ফ্রেন্ড এর নাম সবচেয়ে বড় সেই ফ্রেন্ড এর নাম রিটার্ন করে দেয়া। 
এই ক্ষেত্রে তুমি নামটা অর্থাৎ ফ্রেন্ডের নাম (স্ট্রিং) রিটার্ন করতে হবে। 
 */

function bestFriend(name) {
    let bigfriend = name[0].length;
    for (let i = 0; i < name.length; i++) {
        if (name[i].length > bigfriend) {
            bigfriend = name[i].length;
            myfriend = name[i];
        }

    }
    return myfriend;
}

const name = ['Soya', 'Jarin', 'Nahid', 'Sumaiya akter', 'Hasan rafi']
const result = bestFriend(name);
console.log(result);

//==== OR ====

function bestFriend(name) {
    let bigfriend = '';
    for (let i = 0; i < name.length; i++) {
        if (name[i].length > bigfriend.length) {
            bigfriend = name[i]
        }

    }
    return bigfriend;
}

const name = ['Soya', 'Jarin', 'Nahid', 'Sumaiya akter', 'Hasan rafi']
const result = bestFriend(name);
console.log(result);

/* ৫. এইটা একটু ট্রিকি হতে পারে। একটা array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। 
তোমার কাজ হচ্ছে সংখ্যা গুলা একটার পর একটা করে চেক করা। এবং সংখ্যা গুলা যদি পজিটিভ সংখ্যা হয়। 
অর্থাৎ শূন্য বা শূন্যের চাইতে বড় হয় তাহলে সেগুলাকে কোন একটা array এর মধ্যে রাখবে। 
আর যদি নেগেটিভ সংখ্যা হয়। তাহলে লুপটা স্টপ করে দিবে। 
এবং লুপ বন্ধ করার আগ পর্যন্ত যতগুলা পজিটিভ সংখ্যা পাওয়া গেছে। সেগুলা রিটার্ন করে দিবে।  */
function positiveNumber(number) {
    let positive = [];
    let negative = [];
    for (let i = 0; i < number.length; i++) {
        if (number[i] >= 0) {
            positive.push(number[i]);
        } else if (number[i] < 0) {
            negative.push(number[i]);
        }
    }
    return positive + '\n' + negative;
}
const number = [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, -6]
const result = positiveNumber(number);
console.log(result);