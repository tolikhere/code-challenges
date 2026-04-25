/**
 * Checks equality of arrays by using recursion.
 * @param {any[]} expected - The expected array to test against.
 * @param {any[]} actual - The actual array to test against.
 * @returns {Boolean} Returns true if arrays are equal or false if not.
 */
export const areArraysEqual = (expected, actual) => {
  return (
    expected.length === actual.length &&
    expected.every((expVal, i) => {
      if (Array.isArray(expVal) && Array.isArray(actual[i])) {
        return areArraysEqual(expVal, actual[i]);
      }

      return Object.is(expVal, actual[i]);
    })
  );
};
