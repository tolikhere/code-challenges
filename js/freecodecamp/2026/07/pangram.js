/*
Given a word or sentence and a string of lowercase letters, 
determine if the word or sentence uses all the letters from 
the given set at least once and no other letters.

    Ignore non-alphabetical characters in the word or sentence.
    Ignore letter casing in the word or sentence.
*/

/**
 * Determines if a sentence uses all the letters from a given set at least once and no other letters.
 *
 * @example
 * isPangram("hello", "helo") // returns true
 * isPangram("hello", "hel")  // returns false
 *
 * @param {string} sentence - The word or sentence to check.
 * @param {string} letters - The string of lowercase target letters.
 * @returns {boolean} true if the sentence matches the exact set of letters; otherwise false.
 */
export function isPangram(sentence, letters) {
  const sentenceSet = new Set(sentence.replace(/[^a-z]/gi, "").toLowerCase());
  const lettersSet = new Set(letters);
  const difference = sentenceSet.symmetricDifference(lettersSet);

  return difference.size === 0;
}
