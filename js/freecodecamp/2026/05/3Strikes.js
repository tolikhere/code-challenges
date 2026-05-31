/*
Given an integer between 1 and 10,000, return a count of how many numbers from 1 up to that integer whose square contains at least one digit 3.
*/

/**
 * Count how many numbers from 1 up to given an integer between 1 and 10,000 whose square contains at least one digit 3.
 * @param {number} n - An integer between 1 and 10,000.
 * @returns {number} Returns a count of how many numbers from 1 up to that integer whose square contains at least one digit 3.
 */
export const squaresWithThree = (n) => {
  let count = 0;
  for (let i = 6; i <= n; i++) {
    if (String(i ** 2).includes("3")) {
      count++;
    }
  }
  return count;
};
