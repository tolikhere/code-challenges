/*
Given a string representing a Roman numeral, return its integer value.

Roman numerals consist of the following symbols and values:
Symbol 	Value
I 	1
V 	5
X 	10
L 	50
C 	100
D 	500
M 	1000

    Numerals are read left to right. If a smaller numeral appears before a larger one, the value is subtracted. Otherwise, values are added.
*/

/**
 * Converts a Roman numeral string into its Arabic integer equivalent.
 *
 * @example
 * parseRomanNumeral("XCIX") // returns 99
 *
 * @param {string} numeral - The Roman numeral string to parse (e.g., "MMXXV").
 * @returns {number} The parsed integer value.
 * @throws {Error} Throws an error if the input string is empty or invalid.
 */
export function parseRomanNumeral(numeral) {
  if (!numeral) throw new Error("Empty string");

  const romanNumbers = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;
  let prev = 0;

  for (const num of numeral) {
    let curr = romanNumbers[num];

    if (!curr) throw new Error("Invalid Roman numeral character");

    result += curr;

    if (curr > prev) {
      result -= prev * 2;
    }

    prev = curr;
  }
  return result;
}
