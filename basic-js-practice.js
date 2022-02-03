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