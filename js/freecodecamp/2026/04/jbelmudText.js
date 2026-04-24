/**
 * Returns a jumbled version of passed string where each word is transformed using the following constraints:
 * 
 * The first and last letters of the words remain in place.
 * All letters between the first and last letter are sorted alphabetically.
 * @param {string} text - The input string must contain no punctuation, and be entirely lowercase.
 * @returns {string} Returns a jumbled version of passed string.
 */
export const jbelmu = (text) => {
  const regex = /\b(\w)(\w{2,})(\w)\b/g;

  return text.replace(regex, (match, first, middle, last) => {
    const sortedMiddle = [...middle].sort().join("");
    return `${first}${sortedMiddle}${last}`;
  });
};
