/**
 * @param {any} expected - The expected return value
 * @param {Function} callback - The function to test
 * @param {...any} args - All arguments to be passed to the callback
 * @returns {void}
 */

export const assertEquals = (expected, callback, ...args) => {
  const result = callback(...args);

  if (result === expected) {
    return console.log("✅ PASS");
  }

  console.error("❌ FAIL");
  console.log("    Expected:", expected);
  console.log("    Actual:", result);
  console.log("    With Args:", args);
};
