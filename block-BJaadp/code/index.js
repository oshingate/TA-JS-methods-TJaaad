let persons = [
  { name: "John", grade: 8, sex: "M" },
  { name: "Sarah", grade: 12, sex: "F" },
  { name: "Bob", grade: 16, sex: "M" },
  { name: "Johnny", grade: 2, sex: "M" },
  { name: "Ethan", grade: 4, sex: "M" },
  { name: "Paula", grade: 18, sex: "F" },
  { name: "Donald", grade: 5, sex: "M" },
  { name: "Jennifer", grade: 13, sex: "F" },
  { name: "Courtney", grade: 15, sex: "F" },
  { name: "Jane", grade: 9, sex: "F" },
  { name: "John", grade: 17, sex: "M" },
  { name: "Arya", grade: 14, sex: "F" },
];

// NOTE: Use reduce method whereever you can to solve this exercise:

// Find the average grade

console.log(
  persons.reduce(function (acc, curr) {
    return acc + curr.grade;
  }, 0) / persons.length
);

// Find the average grade of male
let malePersons = [];
let femalePersons = [];
persons.forEach(function (val) {
  if (val.sex === "M") {
    malePersons.push(val);
  } else {
    femalePersons.push(val);
  }
});

console.log(
  malePersons.reduce(function (acc, curr) {
    return acc + curr.grade;
  }, 0) / malePersons.length
);
// Find the average grade of female

console.log(
  femalePersons.reduce(function (acc, curr) {
    return acc + curr.grade;
  }, 0) / femalePersons.length
);

// Find the highest grade

console.log(
  persons.reduce(function (acc, curr) {
    if (acc < curr.grade) {
      return curr.grade;
    } else {
      return acc;
    }
  }, 0)
);
// Find the highest grade in male
console.log(
  malePersons.reduce(function (acc, curr) {
    if (acc < curr.grade) {
      return curr.grade;
    } else {
      return acc;
    }
  }, 0)
);

// Find the highest grade in female

console.log(
  femalePersons.reduce(function (acc, curr) {
    if (acc < curr.grade) {
      return curr.grade;
    } else {
      return acc;
    }
  }, 0)
);

// Find the highest grade for people whose name starts with 'J' or 'P'

const fruitBasket = [
  "banana",
  "cherry",
  "orange",
  "apple",
  "cherry",
  "orange",
  "apple",
  "banana",
  "cherry",
  "orange",
  "fig",
];

/* 

Use the fruitBasket array to create an object where key will be the fruit and value will be the number of times
that fruit has appeared in the array. Store it in new variable fruitsObj

Output: 
{banana: 2, cherry: 3, orange: 3, apple: 2, fig: 1}
*/
let fruitsObj = { banana: 0, cherry: 0, orange: 0, apple: 0, fig: 0 };
fruitBasket.forEach(function (val) {
  switch (true) {
    case val === "banana":
      fruitsObj.banana += 1;
      break;
    case val === "cherry":
      fruitsObj.cherry += 1;
      break;
    case val === "orange":
      fruitsObj.orange += 1;
      break;
    case val === "apple":
      fruitsObj.apple += 1;
      break;
    case val === "fig":
      fruitsObj.fig += 1;
      break;
    default:
      break;
  }
});
console.log(fruitsObj);
/* 

Use the fruitBasket array to create an array of array. Each array will contain two values name of fruit and number of times
that fruit appeared. Use the variable defined above (fruitsObj). To get all the keys of an array you can use Object.keys()



Output: 

[['banana', 2], ['cherry', 3], ['orange', 3], ['apple', 2], ['fig', 1]]
*/
let arrayOfArr = [];
let keysArr = Object.keys(fruitsObj);
keysArr.forEach(function (val) {
  // arrayOfArr.push([val, valueOf(fruitsObj.val)]);
});

console.log(arrayOfArr);

const data = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
];

// Using reduce flat data array
console.log(
  data.reduce(function (acc, cur) {
    return acc.concat(cur);
  })
);

const dataTwo = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11], 12],
];

// Using reduce flat dataTwo array

let newTwo = dataTwo.reduce(function (acc, cur) {
  return acc.concat(cur);
});

console.log(
  newTwo.reduce(function (acc, cur) {
    return acc.concat(cur);
  }, [])
);
/*

Create these functions which accepts a number value and returns a number value:
  - `increment` adds one to the input value
  - `double` doubles the input value
  - `decrement` decrement 1 from the value 
  - `triple` triples the input 
  - `half` converts the value to half and return the integer value not decimal (use Math.round(21.5) => 21)
*/
let increment = (val) => (val += 1);
let double = (val) => (val *= 2);
let decrement = (val) => (val -= 1);
let triple = (val) => (val *= 3);
let half = (val) => (val /= 2);

let pipeline = [
  increment,
  double,
  decrement,
  decrement,
  double,
  triple,
  half,
  increment,
];

/*
Using the pipeline variable that contains the collection of functions, taking the initial value 3 find the output.

NOTE: Initial value will be passed to first function the output of that function will be the input to next function.

EXAMPLE:
  initialValue - 3
  increment(3) - return 4
  double(4) - return 8
  decrement(8) - return 7

  ...
*/
let pipeline21 = (val) => {
  let increment = (val) => (val += 1);
  let double = (val) => (val *= 2);
  let decrement = (val) => (val -= 1);
  let triple = (val) => (val *= 3);
  let half = (val) => (val /= 2);
  return val;
};

let pipeline2 = [
  increment,
  half,
  double,
  decrement,
  decrement,
  triple,
  double,
  triple,
  half,
  increment,
  triple,
];

// Find the output using pipeline2 the initial value if 8
console.log(pipeline21(3));
