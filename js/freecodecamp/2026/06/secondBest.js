/*
Given an array of integers representing the price of different laptops, and an integer representing your budget, return:

    The second most expensive laptop if it is within your budget, or
    The most expensive laptop that is within your budget, or
    0 if no laptops are within your budget.

    Duplicate prices should be ignored.
*/

/**
 * Finds the most expensive laptop following this rule:
 * - The second most expensive laptop if it is within your budget.
 * - Or the most expensive laptop that is within your budget.
 * - Or 0 if no laptops are within your budget.
 * @param {number[]} laptops - Array of integers representing the price.
 * @param {number} budget - Integer representing your budget.
 * @returns Returns the most expensive laptop if found or 0 if not.
 */
export const getLaptopCost = (laptops, budget) => {
  let hasHighestPrice = false;
  let firstBest = 0;
  let secondBest = 0;

  for (const laptop of laptops) {
    if (laptop <= budget) {
      if (firstBest < laptop) {
        secondBest = firstBest;
        firstBest = laptop;
      } else if (secondBest < laptop && firstBest != laptop) {
        secondBest = laptop;
      }
    } else {
      hasHighestPrice = true;
    }
  }

  if (hasHighestPrice) return firstBest;

  return secondBest || firstBest;
};
