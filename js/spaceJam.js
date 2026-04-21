/*
https://www.freecodecamp.org/learn/daily-coding-challenge/2025-08-14

S  P  A  C  E  J  A  M

Given a string, remove all spaces from the string, insert two spaces between every character, 
convert all alphabetical letters to uppercase, and return the result.

    Non-alphabetical characters should remain unchanged (except for spaces).
*/

/******** MY SOLUTION ********/

/**
 * Remove all spaces from the string, insert two spaces between every character,
 * convert all alphabetical letters to uppercase.
 * @param {string} s - The input string
 * @returns {string} The processed string
 */
export function spaceJam(s) {
  return s.replace(/\s+/g, "").toUpperCase().split("").join("  ");
}

/* AI review to my code */

// Your solution is clean, readable, and perfectly functional.
// Using a chain of replace, toUpperCase, split, and join is the standard
// "JavaScript way" of handling this kind of string transformation.
// It’s easy for other developers to look at your code and immediately understand the intent.

/******** AI SOLUTION ********/

/*
1. The Performance Angle (Avoiding Intermediate Arrays)
Your current solution creates an array with split("") and then a new string with join(" "). 
For very large strings, creating that intermediate array can be memory-intensive.
You can achieve the same result in a single pass using a regex with a "lookahead" or a replacement function. 
This avoids turning the string into an array entirely:
*/
function spaceJam(s) {
  return s
    .replace(/\s+/g, "") // Remove all whitespace
    .toUpperCase() // Normalize to uppercase
    .replace(/(.)(?=.)/g, "$1  "); // Add two spaces after every char EXCEPT the last one
}
/*
Note: (.)(?=.) matches any character that is followed by another character, ensuring you don't end up with trailing spaces.
*/

/*
2. The "Modern & Short" Angle
If you enjoy concise code, you can use Spread Syntax [...] instead of .split(""). 
It’s syntactically sugar, but many developers prefer it for its brevity:
*/
const spaceJam = (s) => [...s.replace(/\s+/g, "").toUpperCase()].join("  ");

/*
Which is actually "better"?

    Your original solution is the best for readability. 
    Most teams would prefer it because it’s explicit.
    The regex-only solution is technically "better" for performance (it stays in the string domain),
    though you'd only notice the difference with massive amounts of data.
*/
