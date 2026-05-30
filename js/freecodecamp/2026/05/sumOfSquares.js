/*
Given a positive integer up to 1,000, return the sum of all the integers squared from 1 up to the number.
*/

/**
 * Sums the squares of all integers from 1 to a given number.
 * @param {number} n - A positive integer from 1 up to 1,000.
 * @returns {number} Returns the sum of all the integers squared from 1 up to the number.
 */
export const sumOfSquares = (n) => {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i ** 2;
  }
  return sum;
};
