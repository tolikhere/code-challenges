/*
Given a string, return its camel case version using the following rules:

    Words in the string argument are separated by one or more characters from the following set: 
    Space ( ), dash (-), or underscore (_). Treat any sequence of these as a word break.
    The first word should be all lowercase.
    Each subsequent word should start with an uppercase letter, with the rest of it lowercase.
    All spaces and separators should be removed.

*/

/**
 * Transforms text to its camel case version using the following rules:
 * - Spaces ( ), dashes (-), or underscores (_) and any sequence of these are treated as a word break.
 * - The first word is all lowercase.
 * - Each subsequent word starts with an uppercase letter, with the rest of it lowercase.
 * - All spaces and separators are removed.
 * @param {string} s - Text to process.
 * @returns {string} Returns the camel case version of that text.
 */
export const toCamelCase = (s) => {
  return s
    .toLowerCase()
    .replace(/([\s_-]+)([a-z])/g, (match, separator, firstLetter) =>
      firstLetter.toUpperCase(),
    );
};
