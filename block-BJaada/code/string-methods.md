Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

#### Getting To Know String Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (4-5 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your own words and one sentence explain what this method does.

Example:

1. `charAt`

   - Parameter: (index) defaults to 0 - (number data type)
   - Return: character at specific index in the string (string data type)
   - Example:
     ```js
     let name = "Arya Stark";
     name.charAt(2); //"y"
     let sentance = "A quick brown fox jumped over a lazy dog";
     sentance(4); // "i"
     let houseName = "Starks";
     houseName.charAt(0); // "S"
     ```
   - `charAt` accepts a index (number data type) and return the character on that index in the string.

2. `toUpperCase`

   - Parameter: it does not accepts any parameter.
   - Return: string converted to uppercase.
   - Example:

     ```js
     let name = "Arya Stark";
     name.toUpperCase(); //"ARYA STARK"

     let houseName = "Starks";
     houseName.toUpperCase(); // "STARKS"
     ```

   - `toUpperCase` accepts no prameter but returns string in upper case.

3. `toLowerCase`

- Parameter: (it didnt accepts any parameter.

  - Return: string in lower case.
  - Example:

    ```js
    let name = "Arya Stark";
    name.toLowerCase(); //"arya stark"

    let houseName = "Starks";
    houseName.toLowerCase(); // "starks"
    ```

  - `toLowerCase` accepts no parameter but returns string in lower case.

4. `trim`

- Parameter: accepts no parameter.

  - Return: string with removed white space from start and end.
  - Example:

    ```js
    let name = "   Arya Stark   ";
    name.trim(); //"Arya Stark"

    let houseName = "   Starks    ";
    houseName.trim(); // "Starks"
    ```

  - `trim` accepts no prameter but returns string with removed white spaces from start and end.

5. `trimEnd`

- Parameter: accepts no parameter.
- Return: string with removed white space from end.
- Example:

  ```js
  let name = "   Arya Stark   ";
  name.trimEnd(); //"   Arya Stark"

  let houseName = "   Starks    ";
  houseName.trimEnd(); // "   Starks"
  ```

- `trimEnd` accepts no prameter but returns string with removed white spaces from end.

6. `trimStart`

- Parameter: accepts no parameter.
- Return: string with removed white space from start.
- Example:

  ```js
  let name = "   Arya Stark   ";
  name.trimStart(); //"Arya Stark   "

  let houseName = "   Starks    ";
  houseName.trimStart(); // "Starks   "
  ```

- `trimStart` accepts no prameter but returns string with removed white spaces from start.

7. `concat`

- Parameter: it accepts multiple strings to concat to given string.

  - Return: String formed by concating given strings.
  - Example:

    ```js
    let name = "Arya Stark";

    let houseName = "Starks";
    houseName.concat(" of house ", houseName); // "Arya Stark of house Starks"
    ```

  - `concat` accepts the number of strings and return the string formed by concating them to given string.

8. `endsWith`

- Parameter: (searchString)-characters which is to be searchedat end of string.(length:optional)-this is used to use as length of string

  - Return: true if characters are matched or false if not.
  - Example:

    ```js
    let name = "Arya Stark";
    name.endsWith(a, 4); //"true"

    let houseName = "Starks";
    houseName.endsWith(s); // "true"
    ```

  - `endsWith` accepts searchStr and length and return true if matched and false if not matched.

9. `includes`

- Parameter: (searchString)-the string to be searched.(position)-default=0 position at which to begin search.

  - Return: true if string is matched or false if not matched.
  - Example:

    ```js
    let name = "Arya Stark";
    name.includes("tar"); //"true"

    let houseName = "Starks";
    houseName.includes("ar", 2); // "true"
    ```

  - `includes` accepts 2 parameters out of which 1 is optional which will be matched with string and returns true and false.

10. `indexOf`

- Parameter:(given value) used to find index - (position:default=0)the position at which to start search

  - Return: the index of requuired characters
  - Example:

    ```js
    let name = "Arya Stark";
    name.indexOf("ya"); //"2"

    let houseName = "Starks";
    houseName.indexOf("r", 2); // "3"
    ```

  - `indexOf` accepts a value to find index of that value and optional 2nd parameter to start search for value. and return the index of required value.

11. `lastIndexOf`

- Parameter: (searchValue)the value to be searched for- (indexFrom:optional:default:infinity) the value is searched backword from provided index.

  - Return: theindex of last occurance of value and -1 if not found
  - Example:

    ```js
    let name = "Arya Stark";
    name.lastIndexOf("arya"); //"-1"

    let houseName = "Starks";
    houseName.lastIndexOf("a", 4); // "2"
    ```

  - `lastIndexOf`accepts the value to search for and return last occurance index of value in string.

12. `padEnd`

- Parameter:(targetLength) the targeted length of string - (paddString:optional:default-" ")this is added at end od string if needed to achive max length.
  - Return: the string with given length by adding chars in end.
  - Example:
    ```js
    let name = "Arya Stark";
    name.padEnd(12); //"Arya Stark   "
    "
    let houseName = "Starks";
    houseName.padEnd(10,"ab"); // "Starksababa"
    ```
  - `padEnd` accepts the targetted length of string and return the string of that length with extra char added in end.

13. `padStart`

- Parameter:(targetLength) the targeted length of string - (paddString:optional:default-" ")this is added at end od string if needed to achive max length.
- Return: the string with given length by adding chars in start.
- Example:
  ```js
  let name = "Arya Stark";
  name.padStart(12); //"   Arya Stark"
  "
  let houseName = "Starks";
  houseName.padStart(10,"ab"); // "ababaStarks"
  ```
- `padStart` accepts the targetted length of string and return the string of that length with extra char added in start.

14. `repeat`

- Parameter: (count)accepts value from 0 to infinity.

  - Return: the string repeated that much time given in count.
  - Example:

    ```js
    let name = "Arya Stark";
    name.repeat(2); //"Arya StarkArya Stark"

    let houseName = "Starks";
    houseName.repeat(4); // "StarksStarksStarksStarks"
    ```

  - `repeat` accepts the count and return string which is repeated count times.

15. `replace`

- Parameter: (the string to be replaced) - (new string)

  - Return: the given string with replaced substring.
  - Example:

    ```js
    let name = "Arya Stark";
    name.replace("Arya", "Bran"); //"Bran Stark"

    let houseName = "Starks";
    houseName.replace("ks", "Lannisters"); // "StarLannisters"
    ```

  - `replace` accepts one string to be replaced and other new substring and return replaces string.

16. `slice`

- Parameter: (beginIndex) starting index from which to be sliced - (EndIndex)last index to which string is to be sliced not including end index

  - Return: sliced string.
  - Example:

    ```js
    let name = "Arya Stark";
    name.slice(1, 5); //"rya S"

    let houseName = "Starks";
    houseName.slice(0, 6); // "Starks"
    ```

  - `slice` accepts starting index and end index and slice the string and return it.

17. `split`

- Parameter: (seprator) the seprator from which string is to be splited - (limit:optional)max no of splits allowed

  - Return: array of splited elements.
  - Example:

    ```js
    let name = "Arya Stark";
    name.split(" "); //["Arya","Stark"]

    let houseName = "Starks";
    houseName.split("", 3); // ["S","t","a"]
    ```

  - `split` accepts seprator from which to be splited and max no of splits and return array of splited elements.

18. `substring`

- Parameter: (beginIndex) starting index from which to be sliced - (EndIndex)last index to which string is to be sliced not including end index

  - Return: the substring with starting index and end index.
  - Example:

    ```js
    let name = "Arya Stark";
    name.substring(1, 7); //"rya St"

    let houseName = "Starks";
    houseName.substring(2, 4); // "ar"
    ```

  - `substring` accepts starting index and end index and return the substring.
