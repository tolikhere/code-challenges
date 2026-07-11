/*
The Tribonacci sequence is a series of numbers where each number is the sum of the three preceding ones. When starting with 0, 0 and 1, the first 10 numbers in the sequence are 0, 0, 1, 1, 2, 4, 7, 13, 24, 44.

Given an array containing the first three numbers of a Tribonacci sequence, and an integer representing the length of the sequence, return an array containing the sequence of the given length.

    Your function should handle sequences of any length greater than or equal to zero.
    If the length is zero, return an empty array.
    Note that the starting numbers are part of the sequence.
*/

/**
 * Generates a Tribonacci sequence of a specified length starting from a given three-number sequence.
 * Handles requested lengths smaller than the initial sequence by slicing it directly.
 *
 * @param {number[]} startSequence - An array containing the first three numbers of the sequence.
 * @param {number} length - An integer representing the total length of the sequence to generate.
 * @returns {number[]} An array containing the Tribonacci sequence of the requested length.
 */
export function tribonacciSequence(startSequence, length) {
  if (length <= 3) return startSequence.slice(0, length);

  const result = [...startSequence];

  while (result.length < length) {
    result.push(result.at(-3) + result.at(-2) + result.at(-1));
  }

  return result;
}
