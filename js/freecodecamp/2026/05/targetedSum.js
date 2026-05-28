/*
Given an array of numbers and an integer target, find two unique numbers in the array that add up to the target value. Return an array with the indices of those two numbers, or "Target not found" if no two numbers sum up to the target.
    The returned array should have the indices in ascending order.
*/

/**
 * Finds two unique numbers in the array that add up to the target value.
 * @param {number[]} arr - An array of numbers.
 * @param {number} target -An integer target.
 * @returns {number[]|string} Returns an array with the indices of those two numbers, or "Target not found" if no two numbers sum up to the target.
 */
export const findTarget = (arr, target) => {
  const uniqueArr = new Set(arr);
  for (let i = 0; i < target / 2; i++) {
    // target - i gives us the complement value so if we would summed up i + (target - i) = target
    if (uniqueArr.has(i) && uniqueArr.has(target - i)) {
      return [arr.indexOf(i), arr.indexOf(target - i)].sort((a, b) => a - b);
    }
  }
  return "Target not found";
};
