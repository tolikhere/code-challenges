import { parseRomanNumeral } from "#js/freecodecamp/2026/09/romanNumeralParser.js";
import { assertEquals } from "#utils/assertEquals.js";
import { logGroup } from "#utils/logGroup.js";

const testData = [
  { expected: 3, args: ["III"] },
  { expected: 4, args: ["IV"] },
  { expected: 26, args: ["XXVI"] },
  { expected: 99, args: ["XCIX"] },
  { expected: 460, args: ["CDLX"] },
  { expected: 504, args: ["DIV"] },
  { expected: 2025, args: ["MMXXV"] },
];

logGroup("Challenge name: Roman Numeral Parser", () => {
  testData.forEach((test) =>
    assertEquals(test.expected, parseRomanNumeral, ...test.args),
  );
});
