/*
Given an array of integers, return an array of integers that appear more than once in the initial array, sorted in ascending order. If no values appear more than once, return an empty array.

    Only include one instance of each value in the returned array.

*/

/**
 * Finds duplicate numbers and returns them in ascending order.
 * @param {number[]} arr - Array of numbers.
 * @returns {number[]} Returns duplicate numbers in ascending order.
 */
export function findDuplicates(arr) {
  const duplicates = new Set();
  const allUniqueNumbers = new Set();

  for (const number of arr) {
    if (allUniqueNumbers.has(number)) {
      duplicates.add(number);
      continue;
    }

    allUniqueNumbers.add(number);
  }
  return [...duplicates].sort((a, b) => a - b);
}
