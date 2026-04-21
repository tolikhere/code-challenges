/**
 * Check equality of arrays by using recursion
 * @param {any[]} expected - The expected array to test against
 * @param {any[]} actual - The actual array to test against
 * @returns {Boolean}
 */
const areArraysEqual = (expected, actual) => {
  return (
    expected.length === actual.length &&
    expected.every((expVal, i) => {
      if (Array.isArray(expVal) && Array.isArray(actual[i])) {
        return areArraysEqual(expVal, actual[i]);
      }

      return expVal === actual[i];
    })
  );
};
