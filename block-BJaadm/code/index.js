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

// Create an array peopleName and store value of sex key from persons array
let peopleName = persons.map(function (val) {
  return val.name;
});
console.log(peopleName);
// Create an array peopleGrade and store the value of grade key from persons array

let peopleGrade = persons.map(function (val) {
  return val.grade;
});
console.log(peopleGrade);

// Create an array peopleSex and store the value of sex key from persons array

let peopleSex = persons.map(function (val) {
  return val.sex;
});
console.log(peopleSex);

// Log the filtered named of people in peopleName that starts with 'J' or 'P'

console.log(
  peopleName.filter(function (val) {
    return val.startsWith("J") || val.startsWith("P");
  })
);

// Log the length of filtered named of people in peopleName that starts with 'A' and 'C'
console.log(
  peopleName.filter(function (val) {
    return val.startsWith("A") || val.startsWith("C");
  }).length
);

// Log all the filtered male ('M') in persons array

console.log(
  persons.filter(function (val) {
    return val.sex == "M";
  })
);

// Log all the filtered female ('F') in persons array

console.log(
  persons.filter(function (val) {
    return val.sex == "F";
  })
);

// Log all the filtered female ('F') whose name starts with 'C' or 'J' in persons array

console.log(
  persons.filter(function (val) {
    return (
      (val.sex == "F" && val.name.startsWith("C")) ||
      (val.sex == "F" && val.name.startsWith("J"))
    );
  })
);

// Log all the even numbers from peopleGrade array

console.log(
  peopleGrade.filter(function (val) {
    return val % 2 == 0;
  })
);

// Find the first name that starts with 'J' in persons array and log the object

console.log(
  persons.find(function (val) {
    return val.name.startsWith("J");
  }, 0)
);

// Find the first name that starts with 'P' in persons array and log the object

console.log(
  persons.find(function (val) {
    return val.name.startsWith("P");
  }, 0)
);

// Find the first name that starts with 'J', grade is greater than 10 and is a female

console.log(
  persons.find(function (val) {
    return val.name.startsWith("J") && val.sex == "F";
  }, 0)
);

// Filter all the female from persons array and store in femalePersons array
let femalePersons = persons.filter(function (val) {
  return val.sex == "F";
});
console.log(femalePersons);
// Filter all the male from persons array and store in malePersons array

let malePersons = persons.filter(function (val) {
  return val.sex == "M";
});
console.log(malePersons);

// Find the sum of all grades and store in gradeTotal

let gradeTotal = persons.reduce(function (acc, curr) {
  return acc + curr.grade;
}, 0);
console.log(gradeTotal);
// Find the average grade

console.log(gradeTotal / peopleGrade.length);
// Find the average grade of male
let maleGradeTotal = malePersons.reduce(function (acc, curr) {
  return acc + curr.grade;
}, 0);
console.log(maleGradeTotal / malePersons.length);
// Find the average grade of female

let femaleGradeTotal = femalePersons.reduce(function (acc, curr) {
  return acc + curr.grade;
}, 0);
console.log(femaleGradeTotal / femalePersons.length);

// Find the highest grade

console.log(
  peopleGrade.reduce(function (acc, curr) {
    if (acc < curr) {
      return curr;
    } else {
      return acc;
    }
  })
);

// Find the highest grade in male
let maleGradeArr = malePersons.map(function (val) {
  return val.grade;
});
console.log(maleGradeArr);
console.log(
  maleGradeArr.reduce(function (acc, curr) {
    if (acc < curr) {
      return curr;
    } else {
      return acc;
    }
  })
);
// Find the highest grade in female

let femaleGradeArr = femalePersons.map(function (val) {
  return val.grade;
});
console.log(femaleGradeArr);
console.log(
  femaleGradeArr.reduce(function (acc, curr) {
    if (acc < curr) {
      return curr;
    } else {
      return acc;
    }
  })
);

// Find the highest grade for people whose name starts with 'J' or 'P'

let peopleJP = persons.filter(function (val) {
  return val.name.startsWith("J") || val.name.startsWith("P");
});
console.log(peopleJP);

console.log(
  peopleJP.reduce(function (acc, curr) {
    if (acc.grade > curr.grade) {
      return acc;
    } else {
      return curr;
    }
  })
);

// Sort the peopleGrade in ascending order and log the value of peopleGrade. Notice did the elements of peopleGrade got changed?
console.log(peopleGrade.sort((a, b) => a - b));
console.log(peopleGrade);
// Sort the peopleGrade in descending order
console.log(peopleGrade.sort((a, b) => b - a));

// Sort the peopleGrade in descending order this time you have to make sure you don't mutate the original array
console.log([...peopleGrade].sort((a, b) => b - a));

// Sort the array peopelName in ascending `ABCD..Za....z`

console.log(peopleName.sort());

// Sort the array peopelName in ascending `ABCD..Za....z`. Make sure not to mutate the array
console.log([...peopleName].sort());
