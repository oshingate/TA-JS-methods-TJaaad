// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ["This", "is", "a", "collection", "of", "words"];

/*
NOTE:
While using methods like push, pop, sort etc it mutates the original array.

Clone the array before using sort method: [...arr]

*/

// - Find the index of `101` in numbers
console.log(numbers.indexOf(101));
// - Find the last index of `9` in numbers
console.log(numbers.lastIndexOf(9));

// - Convert value of strings array into a sentance like "This is a collection of words"
console.log(strings.join(" "));
// - Add two new words in the strings array "called" and "sentance"
strings.splice(strings.length + 1, 0, "called", "sentance");
// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"
console.log(strings.join(" "));

// - Remove the first word in the array (strings)
console.log([...strings].shift());

// - Find all the words that contain 'is' use string method 'includes'
let noOfIs = [];
strings.forEach((element) => {
  if (element.includes("is")) {
    noOfIs.push(element);
  }
});
console.log(noOfIs);
// - Find all the words that contain 'is' use string method 'indexOf'
let noOfIsIndex = [];
strings.forEach((element) => {
  if (element.indexOf("is") >= 0) {
    noOfIsIndex.push(element);
  }
});
console.log(noOfIsIndex);
// - Check if all the numbers in numbers array are divisible by three use array method (every)

let isDivi3 = (val) => {
  val % 3 === 0 ? true : false;
};

console.log(numbers.every(isDivi3));

// -  Sort Array from smallest to largest

console.log([...numbers].sort((a, b) => a - b));

// - Remove the last word in strings
console.log([...strings].pop());
// - Find largest number in numbers
let isGreater = [...numbers].sort((a, b) => b - a);
console.log(isGreater[0]);

// - Find longest string in strings
var longest = strings.reduce(function (a, b) {
  return a.length > b.length ? a : b;
});
console.log(longest);
// - Find all the even numbers
let even = [];
numbers.filter(function (val) {
  if (val % 2 === 0) {
    even.push(val);
  }
});
console.log(even);

// - Find all the odd numbers

let odd = [];
numbers.filter(function (val) {
  if (val % 2 === 1) {
    odd.push(val);
  }
});
console.log(odd);

// - Place a new word at the start of the array use (unshift)

console.log([...strings].unshift("abcd"));

// - Make a subset of numbers array [18,9,7,11]
console.log([...numbers].slice(3, 7));
// - Make a subset of strings array ['a','collection']
console.log([...strings].slice(2, 4));
// - Replace 12 & 18 with 1221 and 1881
numbers.splice(numbers.indexOf(12), 1, 1221);
numbers.splice(numbers.indexOf(18), 1, 1881);
console.log(numbers);
// - Replace words in strings array with the length of the word
let wordLen = [];
strings.forEach(function (val) {
  wordLen.push(val.length);
});
console.log(wordLen);
// - Find the sum of the length of words using above question
let total = 0;
console.log(
  wordLen.reduce(function (a, b) {
    return (a = a + b);
  })
);

// - Customers Array
var customers = [
  { firstname: "Joe", lastname: "Blogs" },
  { firstname: "John", lastname: "Smith" },
  { firstname: "Dave", lastname: "Jones" },
  { firstname: "Jack", lastname: "White" },
];
// - Find all customers whose firstname starts with 'J'

let listOfJ = [];
customers.filter(function (val) {
  val.firstname.charAt(0) == "J" ? listOfJ.push(val) : false;
});
console.log(listOfJ);

// - Create new array with only first name

let firstNameArr = [];
customers.forEach(function (val) {
  firstNameArr.push(val.firstname);
});
console.log(firstNameArr);

// - Create new array with all the full names (ex: "Joe Blogs")

let fullNameArr = [];
customers.forEach(function (val) {
  fullNameArr.push(val.firstname + " " + val.lastname);
});
console.log(fullNameArr);

// - Sort the array created above alphabetically
console.log(fullNameArr.sort());
// - Create a new array that contains only user who has at least one vowel in the firstname.
let vowel = [];
let isVowel = (val) => {
  if (
    val.firstname.includes("a") ||
    val.firstname.includes("e") ||
    val.firstname.includes("i") ||
    val.firstname.includes("o") ||
    val.firstname.includes("u")
  ) {
    vowel.push(val);
  }
};
customers.filter(isVowel);
console.log(vowel);
