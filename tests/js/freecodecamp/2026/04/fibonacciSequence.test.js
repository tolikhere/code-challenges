import { fibonacciSequence } from "../../../../../js/freecodecamp/2026/04/fibonacciSequence.js";
import { assertEquals } from "../../../../../utils/assertEquals.js";
import { logGroup } from "../../../../../utils/logGroup.js";

const testData = [
  {
    expected: [
      0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597,
      2584, 4181,
    ],
    args: [[0, 1], 20],
  },
  {
    expected: [21],
    args: [[21, 32], 1],
  },
  {
    expected: [],
    args: [[0, 1], 0],
  },
  {
    expected: [],
    args: [[0, 1], 0],
  },
  {
    expected: [10, 20],
    args: [[10, 20], 2],
  },
  {
    expected: [123456789, 987654321, 1111111110, 2098765431, 3209876541],
    args: [[123456789, 987654321], 5],
  },
];

logGroup(
  "Challenge name: Fibonacci Sequence",
  () => {
    testData.forEach((test) =>
      assertEquals(test.expected, fibonacciSequence, ...test.args),
    );
  },
);
