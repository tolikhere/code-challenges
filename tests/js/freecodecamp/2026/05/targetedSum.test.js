import { findTarget } from "#js/freecodecamp/2026/05/targetedSum.js";
import { assertEquals } from "#utils/assertEquals.js";
import { logGroup } from "#utils/logGroup.js";

const testData = [
  { expected: [0, 1], args: [[2, 7, 11, 15], 9] },
  { expected: [1, 2], args: [[3, 2, 4, 5], 6] },
  { expected: [4, 5], args: [[1, 3, 5, 6, 7, 8], 15] },
  { expected: [4, 5], args: [[1, 3, 5, 6, 8, 7], 15] },
  { expected: "Target not found", args: [[1, 3, 5, 7], 14] },
];

logGroup("Challenge name: findTarget", () => {
  testData.forEach((test) =>
    assertEquals(test.expected, findTarget, ...test.args),
  );
});
