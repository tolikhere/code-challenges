/*
https://www.freecodecamp.org/learn/daily-coding-challenge/2025-08-11

Vowel Balance

Given a string, determine whether the number of vowels in the first half of the string is equal to the number of vowels in the second half.

    The string can contain any characters.
    The letters a, e, i, o, and u, in either uppercase or lowercase, are considered vowels.
    If there's an odd number of characters in the string, ignore the center character.
*/

function isBalanced(s) {
  let middle = Math.floor(s.length / 2);
  const regex = /[aeiou]/gi;
  const firstHalf = s.slice(0, middle);
  if (s.length % 2 != 0) { // Ignore middle character for odd-length strings
    middle += 1;
  }
  const secondHalf = s.slice(middle);

  return getMatchCount(firstHalf, regex) === getMatchCount(secondHalf, regex);
}

function getMatchCount(s, regex) {
  return s.matchAll(regex).toArray().length;
}

console.log(isBalanced("racecar"), true);
console.log(isBalanced("Lorem Ipsum"), true);
console.log(isBalanced("string"), false);
console.log(isBalanced(" "), true);
console.log(isBalanced("abcdefghijklmnopqrstuvwxyz"), false);
console.log(isBalanced("123A#b!E&*456-o.U"), true);
