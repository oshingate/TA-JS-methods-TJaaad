let words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot",
  "rhythm",
];

// - Write a function findLongestWord that takes an array of words and returns the longest
//word from the array. (Use above array "words" to test it). If there are 2 with the same length,
//it should return the first occurrence.
let findLongestWord = (arr) => {
  let longestWord = "";
  for (let i of arr) {
    if (i.length > longestWord.length) {
      longestWord = i;
    }
  }
  return longestWord;
};
findLongestWord(words);
// - Convert the above array "words" into an array of length of word instead of word.

let arrOfLength = words.map(function (val) {
  return val.length;
});
console.log(arrOfLength);

// - Create a new array that only contains word with atleast one vowel.

// - Find the index of the word "rhythm"

console.log(words.indexOf("rhythm"));
// - Create a new array that contians words not starting with vowel.
let startingNotVowe = [];
words.forEach(function (val) {
  if (
    val.startsWith("a") ||
    val.startsWith("e") ||
    val.startsWith("i") ||
    val.startsWith("o") ||
    val.startsWith("u")
  ) {
    return "false";
  } else {
    startingNotVowe.push(val);
  }
});
console.log(startingNotVowe);
// - Create a new array that contianse words not ending with vowel

let endingNotVowe = [];
words.forEach(function (val) {
  if (
    val.endsWith("a") ||
    val.endsWith("e") ||
    val.endsWith("i") ||
    val.endsWith("o") ||
    val.endsWith("u")
  ) {
    return "false";
  } else {
    endingNotVowe.push(val);
  }
});
console.log(endingNotVowe);

//=================================================================

let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers

let sumArray = (arr) => {
  return arr.reduce(function (acc, curr) {
    return acc + curr;
  }, 0);
};
console.log(sumArray(numbers));

// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]

let mul3 = [];

numbers.forEach(function (val) {
  mul3.push(val * 3);
});
console.log(mul3);

// - Create a new array that contains only even numbers

let evenArray = [];
numbers.forEach(function (val) {
  if (val % 2 === 0) {
    evenArray.push(val);
  }
});
console.log(evenArray);
// - Create  a new array that contains only odd numbers.

let oddArray = [];
numbers.forEach(function (val) {
  if (val % 2 !== 0) {
    oddArray.push(val);
  }
});
console.log(oddArray);

// - Create a new array that should have true for even number and false for odd numbers.
let trueFalseArray = [];
numbers.forEach(function (val) {
  if (val % 2 !== 0) {
    trueFalseArray.push("false");
  } else {
    trueFalseArray.push("true");
  }
});
console.log(trueFalseArray);
// - Sort the above number in assending order.
console.log(numbers.sort((a, b) => a - b));
// - Does sort mutate the original array?

console.log(numbers);
//  Yes, it mutates array

// - Find the sum of the numbers in the array.

console.log(
  numbers.reduce(function (acc, cur) {
    return acc + cur;
  }, 0)
);

//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers

let averageNumbers = (arr) => {
  return (
    arr.reduce(function (acc, cur) {
      return acc + cur;
    }, 0) / arr.length
  );
};
console.log(averageNumbers(numbers));
//============================
let strings = [
  "seat",
  "correspond",
  "linen",
  "motif",
  "hole",
  "smell",
  "smart",
  "chaos",
  "fuel",
  "palace",
];

// - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.
let averageWordLength = (arr) => {
  return (
    arr.reduce(function (acc, cur) {
      return acc + cur.length;
    }, 0) / arr.length
  );
};

console.log(averageWordLength(strings));
