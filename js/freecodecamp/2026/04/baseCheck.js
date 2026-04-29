/*
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

/**
 * The function takes string representing a number, and an integer base from 2 to 36.
 * Determines whether the number is valid in that base.
 * @param {string} n - The string may contain integers, and uppercase or lowercase characters.
 * @param {number} base - The base can be any number 2-36.
 * @returns {boolean} Returns true if the number is valid in that base and false if not.
 */
export function isValidNumber(n, base) {
  const baseChar = "0123456789abcdefghijklmnopqrstuvwxyz";
  const searchBase = baseChar.slice(0, base);
  const regex = new RegExp(`^[${searchBase}]+$`, "i");
  return regex.test(n);
}
