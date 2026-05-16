/*
Given two strings, determine if they are anagrams of each other (contain the same characters in any order).

    Ignore casing and white space.
*/

/**
 * Determines if str1 and str2 are anagrams of each other (contain the same characters in any order).
 * @param {string} str1 - String to test against.
 * @param {string} str2 - String to test against.
 * @returns {boolean} - Returns true if if strings are anagrams of each other (contain the same characters in any order), false otherwise.
 */
export const areAnagrams = (str1, str2) => {
  const sortedStr1 = [...str1.toLowerCase().replace(/\s+/g, "")]
    .sort()
    .join("");
  const sortedStr2 = [...str2.toLowerCase().replace(/\s+/g, "")]
    .sort()
    .join("");
  return sortedStr1 === sortedStr2;
};
