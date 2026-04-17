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


function isValidNumber(n, base) {
  const baseChar = "0123456789abcdefghijklmnopqrstuvwxyz";
  const searchBase = baseChar.slice(0, base);
  const regex = new RegExp(`^[${searchBase}]+$`, 'i');
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