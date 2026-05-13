/*
Given a string, determine whether the number of vowels in the first half of the string is equal to the number of vowels in the second half.

    The string can contain any characters.
    The letters a, e, i, o, and u, in either uppercase or lowercase, are considered vowels.
    If there's an odd number of characters in the string, ignore the center character.
*/

/**
 * Determines whether the number of vowels in the first half of the string is equal to the number of vowels in the second half.
 * The letters a, e, i, o, and u, in either uppercase or lowercase, are considered vowels.
 * If there's an odd number of characters in the string, ignores the center character.
 * @param {string} s - The string can contain any characters.
 * @returns {boolean} Returns true if string is balanced and false if not.
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
 * @returns {number} Returns the number of matches.
 */
function getMatchCount(s, regex) {
  // toArray() on Iterators is a very new JavaScript feature Node.js (v22+).
  // On older systems, use the spread operator: [...s.matchAll(regex)].length
  return s.matchAll(regex).toArray().length;
}
