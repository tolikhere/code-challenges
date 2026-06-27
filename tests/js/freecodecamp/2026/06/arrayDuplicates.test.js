import { findDuplicates } from "#js/freecodecamp/2026/06/arrayDuplicates.js";
import { assertEquals } from "#utils/assertEquals.js";
import { logGroup } from "#utils/logGroup.js";

const testData = [
  { expected: [], args: [[1, 2, 3, 4, 5]] },
  { expected: [1, 2], args: [[1, 2, 3, 4, 1, 2]] },
  {
    expected: [-6, 0, 2, 4, 5, 23],
    args: [
      [2, 34, 0, 1, -6, 23, 5, 3, 2, 5, 67, -6, 23, 2, 43, 2, 12, 0, 2, 4, 4],
    ],
  },
];

logGroup("Challenge name: Array Duplicates", () => {
  testData.forEach((test) =>
    assertEquals(test.expected, findDuplicates, ...test.args),
  );
});
