/*
Given an integer from zero to 20, return the factorial of that number. 
The factorial of a number is the product of all the numbers between 1 and the given number.

  The factorial of zero is 1.
*/

/**
 * Calculates the factorial factorial of a number.
 * The factorial of a number is the product of all the numbers between 1 and the given number.
 * The factorial of zero is 1.
 * @param {number} n - An integer from zero to 20.
 * @returns {number} The factorial of that number.
 */
export const factorial = (n) => {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
};
