import { evaluate } from "#js/freecodecamp/2026/06/unorderOfOperations.js";
import { assertEquals } from "#utils/assertEquals.js";
import { logGroup } from "#utils/logGroup.js";

const testData = [
  {
    expected: 3,
    args: [
      [5, 6, 7, 8, 9],
      ["+", "-"],
    ],
  },
  {
    expected: 38,
    args: [
      [17, 61, 40, 24, 38, 14],
      ["+", "%"],
    ],
  },
  {
    expected: 60,
    args: [
      [20, 2, 4, 24, 12, 3],
      ["*", "/"],
    ],
  },
  {
    expected: 30,
    args: [
      [11, 4, 10, 17, 2],
      ["*", "*", "%"],
    ],
  },
  {
    expected: -2,
    args: [
      [33, 11, 29, 13],
      ["/", "-"],
    ],
  },
];

logGroup("Challenge name: Unorder of Operations", () => {
  testData.forEach((test) =>
    assertEquals(test.expected, evaluate, ...test.args),
  );
});
