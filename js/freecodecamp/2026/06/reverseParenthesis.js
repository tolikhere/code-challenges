/*
Given a string that contains properly nested parentheses, return the decoded version of the string using the following rules:

    All characters inside each pair of parentheses should be reversed.
    Parentheses should be removed from the final result.
    If parentheses are nested, the innermost pair should be reversed first, and then its result should be included in the reversal of the outer pair.
    Assume all parentheses are evenly balanced and correctly nested.
*/

/**
 * Decodes a string that contains properly nested parentheses, using the following rules:
 * - All characters inside each pair of parentheses should be reversed.
 * - Parentheses should be removed from the final result.
 * - If parentheses are nested, the innermost pair should be reversed first, and then its result should be included in the reversal of the outer pair.
 * - Assume all parentheses are evenly balanced and correctly nested.
 * @param {string} s - String to decode.
 * @returns {string} Returns the decoded string.
 */
export const decode = (s) => {
  let decodedStr = s;

  while (decodedStr.includes("(")) {
    decodedStr = decodedStr.replace(/\(([^\(|^\)]*)\)/g, (match, nestedStr) => {
      return nestedStr.split("").reverse().join("");
    });
  }

  return decodedStr;
};
