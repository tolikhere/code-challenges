import { areArraysEqual } from "./areArraysEqual.js";

/**
 * @param {any} expected - The expected return value
 * @param {Function} callback - The function to test
 * @param {...any} args - All arguments to be passed to the callback
 * @returns {boolean} - Returns true if passed, false if failed
 */
export const assertEquals = (expected, callback, ...args) => {
  const result = callback(...args);

  const isPass =
    Array.isArray(expected) && Array.isArray(result)
      ? areArraysEqual(expected, result)
      : result === expected;

  if (isPass) {
    console.log("✅ PASS");
  } else {
    console.error("❌ FAIL");
    console.log("    Expected:", expected);
    console.log("    Actual:", result);
    console.log("    With Args:", args);
  }

  return isPass;
};
