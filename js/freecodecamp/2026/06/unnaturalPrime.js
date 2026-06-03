/*
Given an integer, determine if that number is a prime number or a negative prime number.

  A prime number is a positive integer greater than 1 that is only divisible by 1 and itself.
  A negative prime number is the negative version of a positive prime number.
  1 and 0 are not considered prime numbers.
*/

/**
 * Determines if that number is a prime number or a negative prime number.
 * - 1 and 0 are not considered prime numbers.
 * @param {number} n - An integer.
 * @returns {boolean} Return true if the number is a prime number, otherwise false.
 */
export const isUnnaturalPrime = (n) => {
  const sqrt = Math.sqrt(Math.abs(n));
  if (sqrt === 1 || sqrt === 0) return false;

  for (let i = 2; i <= sqrt; i++) {
    if (n % i === 0) return false;
  }

  return true;
};
