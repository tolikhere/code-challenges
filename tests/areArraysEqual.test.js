import { areArraysEqual } from "../utils/areArraysEqual.js";
import { assertEquals } from "../utils/assertEquals.js";
import { logGroup } from "../utils/logGroup.js";

const testData = [
  // 1. Basic empty cases
  { expected: true, args: [[], []] },
  { expected: false, args: [[], [1]] },

  // 2. Flat arrays
  {
    expected: true,
    args: [
      [1, 2, 3],
      [1, 2, 3],
    ],
  },
  {
    expected: false,
    args: [
      [1, 2, 3],
      [1, 2, 4],
    ],
  },
  {
    expected: false,
    args: [
      [1, 2],
      [1, 2, 3],
    ],
  }, // Different lengths

  // 3. Simple nesting
  {
    expected: true,
    args: [
      [1, [2, 3]],
      [1, [2, 3]],
    ],
  },
  {
    expected: false,
    args: [
      [1, [2, 3]],
      [1, [2, 4]],
    ],
  },

  // 4. Deep nesting (multi-dimensional)
  {
    expected: true,
    args: [
      [1, [2, [3, 4]]],
      [1, [2, [3, 4]]],
    ],
  },
  {
    expected: false,
    args: [
      [1, [2, [3, 4]]],
      [1, [2, [3, 5]]],
    ],
  },

  // 5. Types check (mixed data)
  {
    expected: true,
    args: [
      ["a", 1, true],
      ["a", 1, true],
    ],
  },
  {
    expected: false,
    args: [
      ["1", 1],
      [1, 1],
    ],
  }, // String vs Number
];

logGroup("Testing utility function: areArraysEqual", () => {
  testData.forEach((test) =>
    assertEquals(test.expected, areArraysEqual, ...test.args),
  );
});
