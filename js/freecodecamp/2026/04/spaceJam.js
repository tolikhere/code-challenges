/*
Given a string, remove all spaces from the string, insert two spaces between every character, 
convert all alphabetical letters to uppercase, and return the result.

    Non-alphabetical characters should remain unchanged (except for spaces).
*/

/**
 * Removes all spaces from the string, insert two spaces between every character,
 * convert all alphabetical letters to uppercase.
 * @param {string} s - The input string.
 * @returns {string} The processed string.
 */
export function spaceJam(s) {
  return s.replace(/\s+/g, "").toUpperCase().split("").join("  ");
}
