import { tribonacciSequence } from "#js/freecodecamp/2026/07/tribonacciSequence.js";
import { assertEquals } from "#utils/assertEquals.js";
import { logGroup } from "#utils/logGroup.js";

const testData = [
  {
    expected: [
      0, 0, 1, 1, 2, 4, 7, 13, 24, 44, 81, 149, 274, 504, 927, 1705, 3136, 5768,
      10609, 19513,
    ],
    args: [[0, 0, 1], 20],
  },
  { expected: [21], args: [[21, 32, 43], 1] },
  { expected: [], args: [[0, 0, 1], 0] },
  { expected: [10, 20], args: [[10, 20, 30], 2] },
  { expected: [10, 20, 30], args: [[10, 20, 30], 3] },
  {
    expected: [123, 456, 789, 1368, 2613, 4770, 8751, 16134],
    args: [[123, 456, 789], 8],
  },
];

logGroup("Challenge name: Tribonacci Sequence", () => {
  testData.forEach((test) =>
    assertEquals(test.expected, tribonacciSequence, ...test.args),
  );
});
