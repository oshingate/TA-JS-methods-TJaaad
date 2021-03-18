Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

## Getting To Know Array Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (2-3 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your words what this method does.
6. Does it mutate the original value or not (check https://doesitmutate.xyz)

Example:

1. `concat`

   - Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
   - Return: a single Array consisting of by all the values passed as parameters in the same order.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.concat(4); //[1,2,3,4]
     let sentanceArray = "A quick brown fox jumped over a lazy".split(" ");
     sentanceArray.concat("dog").join(" "); //"A quick brown fox jumped over a lazy dog"
     let colors = ["red", "green", "blue"];
     colors.concat("black", "red", 21, true); // ['red','green','blue','black', 'red', 21, true]
     ```
   - `concat` accepts n number of values and returns one array with all the values in same order. It does not change the original array.
   - No it does not mutate the original array

2. `join`

- Parameter: (seprator:optional) seprator is used to seprate the joined array of elements.

  - Return: the string containing the all elements of array seprated by given parameter.
  - Example:

    ```js
    let numbers = [1, 2, 3];
    numbers.join(); //"1,2,3"

    let colors = ["red", "green", "blue"];
    colors.join(" + "); // "red + green + blue"
    ```

  - `join` accepts the parameter "seprator" which is used to create string of elements of array joined by seprator
  - No it does not mutate the original array

3. `flat`

- Parameter: (depth:optional:default=1)

  - Return: a array witn all elements or sub array of depth as specified.
  - Example:

    ```js
    let numbers = [1, [2], 3];
    numbers.flat(); //[1,2,3,]

    let colors = ["red", [[["green"]]], "blue"];
    colors.flat(2); // ['red',['green'],'blue']
    ```

  - `flat` accepts the optional parameter depth and returns new array having subarray of depth as provided or by default of depth 1.
  - No it does not mutate the original array

4. `push`

- Parameter: (element)-element parameter is used to add in last position of array

  - Return: the no of elements in the array after adding elements.
  - Example:

    ```js
    let numbers = [1, 2, 3];
    numbers.push(4); //[1,2,3,4]

    let colors = ["red", "green", "blue"];
    colors.push("black", "red", 21, true); // ['red','green','blue','black', 'red', 21, true]
    ```

  - `push` accepts the elements to be pushed into array and then add them to end of array and return total no of elements in the array.
  - YEs ,it mutate the original array

5. `indexOf`

- Parameter:(searchElem)-it is element whos index to be found.(fromIndex:optional:default:0)it is index from which the search is to be start return -1 if it is > length of array.

  - Return: the index of required element if not found return -1.
  - Example:

    ```js
    let numbers = [1, 2, 3];
    numbers.indexOf(2); //1

    let colors = ["red", "green", "blue"];
    colors.indexOf("black"); // -1
    ```

  - `indexOf` accepts element whos index is to be found and return index of that element.
  - No it does not mutate the original array

6. `lastIndexOf`

- Parameter: (elem)-the element of which last index is to be found.(fromIndex)-search for last index is started from fromIndex backword.

  - Return: the last occuring index of given element and return -1 if not found..
  - Example:

    ```js
    let numbers = [1, 2, 3, 1];
    numbers.lastIndexOf(1); //3

    let colors = [2, 5, 1, 53, 3, 6, 7, 9, 3];
    colors.lastIndexOf(3, 6); //4
    ```

  - `lastIndexOf` accepts element whos last occuring index is to be found and return the index and -1 if not found.
  - No it does not mutate the original array

7. `includes`

- Parameter:(value)it is value to be find.(fromIndex:optional:default=0)

  - Return: true or false.
  - Example:

    ```js
    let numbers = [1, 2, 3];
    numbers.includes(4); //false

    let colors = ["red", "green", "blue"];
    colors.includes("blue", 1); // true
    ```

  - `includes` accepts value which is to be searched in array and return true if found .
  - No it does not mutate the original array

8. `reverse`

- Parameter: no parameter

  - Return: a reversed array.
  - Example:

    ```js
    let numbers = [1, 2, 3];
    numbers.reverse(); //[3,2,1]

    let colors = ["red", "green", "blue"];
    colors.reverse(); // ["blue", "green","red"]
    ```

  - `reverse` converts the given array in reverse and returns it..
  - yes, it mutate the original array

9. `every`

- Parameter: (callback)it is function which is to be tested on every element

  - Return: true if all elements pass the test implemented by function or return false if not.
  - Example:

    ```js
    let check = (value) => (value > 10 ? true : false);
    let numbers = [11, 12, 13];
    numbers.every(check); //true

    let nums = [1, 23, 43, 65, 1];
    nums.every(check); //false
    ```

  - `every` accepts callback function which is used to check whether every element in array pass the test implemented by function and return true if all elements pass test and false if not.
  - No it does not mutate the original array

10. `shift`

- Parameter: no parameter

  - Return: first element of array.
  - Example:

    ```js
    let numbers = [1, 2, 3];
    numbers.shift(); // 1

    let colors = ["red", "green", "blue"];
    colors.shift(); // "red"
    ```

  - `shift` removes first element from arrray and return it
  - Yes, it mutate the original array

11. `splice`

- Parameter: (start)-index from which elemts are to be removed.(count)-count of how many elements to be removed.

  - Return: array of removed elements.
  - Example:

    ```js
    let numbers = [1, 2, 3];
    numbers.splice(1, 1); //[1,3]

    let colors = ["red", "green", "blue", "black", "red", 21, true];
    colors.splice(2, 3); // ["blue", "black", "red"]
    ```

  - `splice` accepts the index from which elements are to be removed and count of how many elements to be moved. and return array of removed elements
  - Yes, it mutate the original array

12. `find`

- Parameter:(object:Required). The object to convert to an array
  (mapFunction:Optional.) A map function to call on each item of the array
  (thisValue:Optional.) A value to use as this when executing the mapFunction

  - Return: An Array object.
  - Example:

    ```js
    Array.from("foo"); // [ "f", "o", "o" ];

    const set = new Set(["foo", "bar", "baz", "foo"]);
    Array.from(set); // [ "foo", "bar", "baz" ]
    ```

  - `find` accepts n number of values and returns one array with all the values in same order. It does not change the original array.
  - No it does not mutate the original array

13. `unshift`

- Parameter: (elem) add the given elem to start of array

  - Return: the length array after adding elem in start of given array.
  - Example:

    ```js
    let numbers = [1, 2, 3];
    numbers.unshift(4); // 4

    let colors = ["red", "green", "blue"];
    colors.unshift("black", "red", 21, true); // 7
    ```

  - `unshift` accepts the elemetns which are to be added in start of array and return length after adding them to array
  - Yes, it mutate the original array

14. `findIndex`

- Parameter: (callback)-function to run tessts on elements

  - Return: the index of first element which pass the test implemented by function otherwise return -1..
  - Example:

    ```js
    let cbFun = (value) => (value > 10 ? true : false);
    let numbers = [1, 2, 3];
    numbers.findIndex(cbFun); //-1

    let num2 = [1, 4, 5, 212, 221, 1233];
    num2.findIndex(cbFun); //3
    ```

  - `findIndex` accepts callback function to run test on each elements of arrray and return the index of first elem which pass it or return -1 if no one pass test.
  - No it does not mutate the original array

15. `filter`

- Parameter: (cb func)-function which run test on each element of array

  - Return: new array of elements which pass test by cb function.
  - Example:

    ```js
    let check = (val) => (val > 10 ? true : false);
    let numbers = [1, 2, 3];
    numbers.filter(check); //[]

    let colors = [1, 232, 3, 54, 1, 3, 6, 3234, 123];
    colors.filter(check); // [232,54,3234,123]
    ```

  - `filter` accepts callback function and return new array of elements which pass the given function's test.
  - No it does not mutate the original array

16. `flat`

- Parameter: (depth:optional:default=1)

  - Return: a array witn all elements or sub array of depth as specified.
  - Example:

    ```js
    let numbers = [1, [2], 3];
    numbers.flat(); //[1,2,3,]

    let colors = ["red", [[["green"]]], "blue"];
    colors.flat(2); // ['red',['green'],'blue']
    ```

  - `flat` accepts the optional parameter depth and returns new array having subarray of depth as provided or by default of depth 1.
  - No it does not mutate the original array

17. `forEach`

- Parameter: (function)-function to execute it on every element

  - Return: undefined.
  - Example:

    ```js
    let add = (value) => console.log((value += 1));
    let numbers = [1, 2, 3];
    numbers.forEach(add); //undefined

    let colors = ["red", "green", "blue"];
    colors.forEach(add); //undefined
    ```

  - `forEach` accepts function and run function on each element atleast once.
  - No it does not mutate the original array

18. `map`

- Parameter: (cbFun)-used to execute it on every element

  - Return: New array of elements formed by executing function on every elemetn at a time..
  - Example:

    ```js
    let add = (value) => (value += 1);

    let numbers = [1, 2, 3];
    numbers.map(add); //[2,3,4]

    let colors = ["red", "green", "blue"];
    colors.map(add); // ['red1','green1','blue1']
    ```

  - `map` accepts callback function and return new array of elements returned by executing function on each elemetn of array.
  - No it does not mutate the original array

19. `pop`

- Parameter: no parameter

  - Return: element which is at last of array.
  - Example:

    ```js
    let numbers = [1, 2, 3];
    numbers.pop(); // 3

    let colors = ["red", "green", "blue"];
    colors.pop(); // "blue"
    ```

  - `pop` it return the last element of given array by removing it and changing original array..
  - Yes, it mutate the original array

20. `reduce`

- Parameter: (function)-function is used to reduce array,(initialVal:optiona:default:0)-used by function to calculate.

  - Return: single value get by running function.
  - Example:

    ```js
    let addAll = (acc, curr) => acc + curr;
    let numbers = [1, 2, 3];
    numbers.reduce(addAll, 0); //6

    numbers.reduce(addAll, 10); //16
    ```

  - `reduce` accepts parameter and initial value and return single value produced by ececuting function.
  - No it does not mutate the original array

21. `slice`

- Parameter: (initialIndex)-the index from which to select elements of new array.(count:optional:default:arr.length)

  - Return: new array of elements selected from original array
  - Example:

    ```js
    let numbers = [1, 2, 3];
    numbers.slice(1, 1); //[2]

    let colors = ["red", "green", "blue", "black", "red", 21, true];
    colors.slice(3, 3); // ['black', 'red', 21]
    ```

  - `slice` accepts initial index and count and return new array of elements selected from original array.
  - No it does not mutate the original array

22. `some`

- Parameter: (cbFunc)-function to run test on each element

  - Return:true of atleast one element from array pass the test run by function or false if no one pass test.
  - Example:

    ```js
    let isEven = (val) => (val % 2 === 0 ? true : false);
    let numbers = [1, 5, 3];
    numbers.some(isEven); //false

    let colors = [1, 2, 3, 5, 7];
    colors.some(isEven); // true
    ```

  - `some` accepts function and return true if atleast one element of array pass the test run by function otherwise return false.
  - No it does not mutate the original array
