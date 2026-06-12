/*
Given an array of integers and an array of string operators, 
apply the operations to the numbers sequentially from left-to-right.
Repeat the operations as needed until all numbers are used. Return the final result.

For example, given [1, 2, 3, 4, 5] and ['+', '*'], return the result of evaluating 
1 + 2 * 3 + 4 * 5 from left-to-right ignoring standard order of operations.

    Valid operators are +, -, *, /, and %.
*/

/**
 * Truncates the tiny floating-point rounding errors.
 * @param {number} num - Any Number.
 * @returns Returns the rounded result at the 12th decimal place.
 */
const strip = (num) => Number.parseFloat(num.toFixed(12));

const calculator = {
  "+": (a, b) => strip(a + b),
  "-": (a, b) => strip(a - b),
  "*": (a, b) => strip(a * b),
  "/": (a, b) => {
    if (b === 0) throw new RangeError("Division by zero");
    return strip(a / b);
  },
  "%": (a, b) => {
    if (b === 0) throw new RangeError("Modulo by zero");
    return strip(a % b);
  },
};

/**
 * Evaluates an array of integers and an array of string operators,
 * apply the operations to the numbers sequentially from left-to-right.
 * Repeat the operations as needed until all numbers are used.
 * - Valid operators are +, -, *, /, and %.
 * @param {number[]} numbers - Array of integers.
 * @param {string[]} operators - Array of string operators.
 * @returns Returns the final result of evaluation.
 */
export const evaluate = (numbers, operators) => {
  if (numbers.length === 0 || operators.length === 0) {
    throw new Error("Provide numbers and operators in arrays");
  }

  if (!operators.every((operator) => Object.hasOwn(calculator, operator))) {
    throw new Error("Provide valid operators: +, -, *, /, %");
  }

  let result = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    const operator = operators[(i - 1) % operators.length];
    result = calculator[operator](result, numbers[i]);
  }

  return result;
};
