/*
https://www.freecodecamp.org/learn/daily-coding-challenge/2025-08-12

Base Check

Given a string representing a number, and an integer base from 2 to 36, determine whether the number is valid in that base.

    The string may contain integers, and uppercase or lowercase characters.
    The check should be case-insensitive.
    The base can be any number 2-36.
    A number is valid if every character is a valid digit in the given base.
    Example of valid digits for bases:
        Base 2: 0-1
        Base 8: 0-7
        Base 10: 0-9
        Base 16: 0-9 and A-F
        Base 36: 0-9 and A-Z
*/

/******** MY SOLUTION ********/

function isValidNumber(n, base) {
  const baseChar = "0123456789abcdefghijklmnopqrstuvwxyz";
  const searchBase = baseChar.slice(0, base);
  const regex = new RegExp(`^[${searchBase}]+$`, "i");
  return regex.test(n);
}

console.log(isValidNumber("10101", 2), true);
console.log(isValidNumber("10201", 2), false);
console.log(isValidNumber("76543210", 8), true);
console.log(isValidNumber("9876543210", 8), false);
console.log(isValidNumber("9876543210", 10), true);
console.log(isValidNumber("ABC", 10), false);
console.log(isValidNumber("ABC", 16), true);
console.log(isValidNumber("Z", 36), true);
console.log(isValidNumber("ABC", 20), true);
console.log(isValidNumber("4B4BA9", 16), true);
console.log(isValidNumber("5G3F8F", 16), false);
console.log(isValidNumber("5G3F8F", 17), true);
console.log(isValidNumber("abc", 10), false);
console.log(isValidNumber("abc", 16), true);
console.log(isValidNumber("AbC", 16), true);
console.log(isValidNumber("z", 36), true);

/* AI review to my code */

// What’s great about your solution:

//     Readability: It’s very easy to see exactly what the code is doing.
//     Correctness: It perfectly handles the case-insensitivity requirements via the 'i' flag.
//     Leverages the String: Using the baseChar string as a reference for slicing is much easier than doing math on ASCII codes.

/******** AI SOLUTION ********/
/*
1. The Performance "Trap" (Re-compiling Regex)
Right now, every time you call isValidNumber, JavaScript has to:

    Slice a string.
    Build a new template string.
    Compile a brand new Regex object.

If you call this function 10,000 times in a loop, that's a lot of overhead. 
If performance matters, you could cache the regexes:
*/
const cache = {};

function isValidNumber1(n, base) {
  const baseChar = "0123456789abcdefghijklmnopqrstuvwxyz";

  if (!cache[base]) {
    const searchBase = baseChar.slice(0, base);
    cache[base] = new RegExp(`^[${searchBase}]+$`, "i");
  }

  return cache[base].test(n);
}

/*
2. The Non-Regex Approach (The "No-Library" Way)
You can actually solve this without regex by using JavaScript's built-in parseInt. 
When you parseInt a string with a base, it parses as much as it can until it hits an invalid character.
*/

function isValidNumber2(n, base) {
  // If the parsed result is the same length as the string, it's all valid
  // (We use BigInt or check character by character to avoid overflow on huge numbers)
  return [...n].every((char) => !isNaN(parseInt(char, base)));
}

/*
3. Handling Empty Strings
One small "bug" in the current regex logic:
isValidNumber("", 10) will return false because of the + (which means "one or more"). 
If an empty string is considered "valid" (zero digits), you'd use *. 
If a number must have at least one digit, your + is correct!

A "Pro" Version (Clean & Optimized)
If you want the most "robust" version of your own logic:
*/

const BASE_CHARS = "0123456789abcdefghijklmnopqrstuvwxyz";

function isValidNumber3(n, base) {
  // 1. Guard against empty strings if necessary
  if (!n) return false;

  // 2. Use your logic, but maybe limit the base range
  if (base < 2 || base > 36) return false;

  const pattern = `^[${BASE_CHARS.slice(0, base)}]+$`;
  return new RegExp(pattern, "i").test(n);
}

/*
Final Verdict: Your solution is great for a coding challenge.
It shows you understand how to manipulate strings to feed a dynamic RegExp constructor.
*/
