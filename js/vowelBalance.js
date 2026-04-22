/*
https://www.freecodecamp.org/learn/daily-coding-challenge/2025-08-11

Vowel Balance

Given a string, determine whether the number of vowels in the first half of the string is equal to the number of vowels in the second half.

    The string can contain any characters.
    The letters a, e, i, o, and u, in either uppercase or lowercase, are considered vowels.
    If there's an odd number of characters in the string, ignore the center character.
*/

/******** MY SOLUTION ********/
/**
 * Determine whether the number of vowels in the first half of the string is equal to the number of vowels in the second half.
 * The letters a, e, i, o, and u, in either uppercase or lowercase, are considered vowels.
 * If there's an odd number of characters in the string, ignores the center character.
 * @param {string} s - The string can contain any characters.
 * @returns {boolean} Return true if string is balanced and false if not
 */
export function isBalanced(s) {
  const middle = Math.floor(s.length / 2);
  const regex = /[aeiou]/gi;
  const firstHalf = s.slice(0, middle);
  const secondHalf = s.slice(-middle);

  return getMatchCount(firstHalf, regex) === getMatchCount(secondHalf, regex);
}

/**
 * Counts how many matches the string have.
 * It uses regular expression to find matches.
 * @param {string} s - String can contain any characters.
 * @param {RegExp} regex - Regular expression must have the global ('g') flag.
 * @returns {number} Return the number of matches.
 */
function getMatchCount(s, regex) {
  // toArray() on Iterators is a very new JavaScript feature Node.js (v22+).
  // On older systems, use the spread operator: [...s.matchAll(regex)].length
  return s.matchAll(regex).toArray().length;
}

/* AI review to my code */
// What’s great about your code:

//     Correct Logic: You handled the "ignore the center character" rule perfectly by shifting the middle index for odd lengths.
//     Modern Syntax: Using matchAll with toArray().length is very readable.
//     Readability: Breaking the counting into a helper function (getMatchCount) keeps the main logic focused.

/******** AI SOLUTION ********/

/*
1. The Performance Tweak (The "One-Pass" approach)
  Right now, you are slicing the string into two new strings (allocating memory) and then running two separate regex scans.
  For a tiny string, it doesn't matter.
  For a massive string, you could just loop once:
*/

function isBalanced1(s) {
  const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  let balance = 0;
  const half = Math.floor(s.length / 2);

  for (let i = 0; i < half; i++) {
    if (vowels.has(s[i])) balance++; // Add for first half

    // Calculate index for the second half, skipping the middle if odd
    const rightIndex = s.length - 1 - i;
    if (vowels.has(s[rightIndex])) balance--; // Subtract for second half
  }

  return balance === 0;
}

/*
Why this is "better": No new strings created, no regex engine overhead, and it stops at the halfway point.
*/

/*
2. The Functional "Cool" Way (Using your v24 features)
If you want to keep it short and use those fancy new methods, you can simplify your middle logic:
*/

function isBalanced2(s) {
  const regex = /[aeiou]/gi;
  const mid = s.length / 2;

  // slice(0, mid) handles the first half
  // slice(-mid) automatically takes from the end backwards!
  const first = (s.slice(0, mid).match(regex) || []).length;
  const second = (s.slice(-mid).match(regex) || []).length;

  return first === second;
}

/*
Tip: s.slice(-mid) is a great trick. If mid is 3, it takes the last 3 characters.
If the string is length 7, mid is 3.5. slice truncates that to 3, so it takes the last 3, 
effectively skipping the middle character automatically!
*/
