/*
The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones. 
When starting with 0 and 1, the first 10 numbers in the sequence are 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.

Given an array containing the first two numbers of a Fibonacci sequence, and an integer representing 
the length of the sequence, return an array containing the sequence of the given length.

    Your function should handle sequences of any length greater than or equal to zero.
    If the length is zero, return an empty array.
    Note that the starting numbers are part of the sequence.

*/

/**
 * Handles the Fibonacci sequence of any length greater than or equal to zero.
 * If the length is zero, return an empty array.
 * Note that the starting two numbers are part of the sequence.
 * @param {number[]} startSequence - An array containing the first two numbers of a Fibonacci sequence.
 * @param {number} length - An integer representing the length of the sequence.
 * @returns {number[]} Returns an array containing the sequence of the given length.
 */
export function fibonacciSequence(startSequence, length) {
  if (length === 0) return [];
  const result = [...startSequence];

  for (let i = result.length; i < length; i++) {
    result.push(result.at(-2) + result.at(-1));
  }

  return result.slice(0, length);
}
