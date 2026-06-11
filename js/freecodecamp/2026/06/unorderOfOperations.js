/*
Given an array of integers and an array of string operators, 
apply the operations to the numbers sequentially from left-to-right.
Repeat the operations as needed until all numbers are used. Return the final result.

For example, given [1, 2, 3, 4, 5] and ['+', '*'], return the result of evaluating 
1 + 2 * 3 + 4 * 5 from left-to-right ignoring standard order of operations.

    Valid operators are +, -, *, /, and %.
*/

const calculator = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => a / b,
  "%": (a, b) => a % b,
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
