/*
Given a string, return a new version of the string where each vowel is duplicated one more time 
than the previous vowel you encountered. For instance, the first vowel in the sentence should 
remain unchanged. The second vowel should appear twice in a row. 
The third vowel should appear three times in a row, and so on.

    The letters a, e, i, o, and u, in either uppercase or lowercase, are considered vowels.
    The original vowel should keeps its case.
    Repeated vowels should be lowercase.
    All non-vowel characters should keep their original case.
*/

/**
 * Repeats vowels in the string progressively based on their order of appearance.
 * Repeated vowels will be lowercase.
 * The original vowel will keep its case.
 *
 * @example
 * repeatVowels("freeCodeCamp") // returns "freeeCooodeeeeCaaaaamp"
 *
 * @param {string} str - The string to format.
 * @returns {string} The formatted string with vowels repeated.
 */
export function repeatVowels(str) {
  if (str.length === 0) return str;

  const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  const result = Array(str.length);
  let vowelCount = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (vowels.has(char)) {
      result[i] = char + char.toLowerCase().repeat(vowelCount);
      vowelCount++;
    } else {
      result[i] = char;
    }
  }

  return result.join("");
}
