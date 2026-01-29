/**
const users = ["Rahat", "Karim", "Sumi", "Abir", "Sumi", "Jamil"];
const prices = [120, 450, 990, 1500, 75, 2000];
1. users অ্যারেতে "Sumi" প্রথম কত নম্বর ইনডেক্সে আছে এবং শেষ কত নম্বর ইনডেক্সে আছে তা বের করুন।
2. চেক করে দেখুন এই লিস্টে "Karim" আছে কি না এবং "Rakib" আছে কি না। রেজাল্ট হিসেবে true বা false দেখান।
3. prices অ্যারে থেকে এমন প্রথম সংখ্যাটি খুঁজে বের করুন যা ১০০০ এর চেয়ে বড়।
4. users অ্যারের মধ্যে "Abir" কত নম্বর পজিশনে (index) আছে তা findIndex() দিয়ে বের করুন।
5. আপনার দোকানে কি এমন কোনো প্রোডাক্ট আছে যেটির দাম ২০০০ এর বেশি? prices অ্যারেতে some() ব্যবহার করে এটি চেক করুন।
6. চেক করে দেখুন prices অ্যারের সবগুলো দাম ৫০ টাকার উপরে কি না।
const products = [
  { name: "Laptop", price: 80000 },
  { name: "Mouse", price: 1500 },
  { name: "Keyboard", price: 3000 }
];
7. find() ব্যবহার করে সেই অবজেক্টটি বের করুন যার নাম "Mouse"।
 */


// Solution 1
const users = ["Rahat", "Karim", "Sumi", "Abir", "Sumi", "Jamil", "Sumi"];
console.log(users.indexOf('Sumi'));
console.log(users.lastIndexOf("Sumi"));

// solution 1 output
// 2
// 6

// Solution 2
const users2 = ["Rahat", "Karim", "Sumi", "Abir", "Sumi", "Jamil", "Sumi"];
console.log(users2.includes("Karim"));
console.log(users2.includes("Rakib"));

// Solution 2 output
// True
// False

// Solution 3
const prices = [120, 450, 990, 1500, 75, 2000];
const biggestNumber = prices.find((num) => {
  return (

    num > 1000
  )
})
console.log(biggestNumber);
//Solution 3 output
// 1500

// Sotution 4
const users3 = ["Rahat", "Karim", "Sumi", "Abir", "Sumi", "Jamil", "Sumi"];
const AbirIndex =  users3.findIndex((num) => num === "Abir" )
console.log(AbirIndex);

// Solution 4 output
// 3

// Solution 5
const prices2= [120, 450, 990, 1500, 75, 2000];
const aa = prices2.some((price) => price > 2000);

// solution 5 output
// false

// Solution 6
const prices3 = [120, 450, 990, 1500, 75, 2000];
const beshiPrice = prices3.every((price) => price > 50);
console.log(beshiPrice);

// solution 6 output
// true

// Solution 7
const products = [
  { name: "Laptop", price: 80000 },
  { name: "Mouse", price: 1500 },
  { name: "Keyboard", price: 3000 }
];

const productName = products.find((product) => product.name === "Mouse");
console.log(productName);
