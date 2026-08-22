import { rotate } from "#js/freecodecamp/2026/08/matrixRotate.js";
import { assertEquals } from "#utils/assertEquals.js";
import { logGroup } from "#utils/logGroup.js";

const testData = [
  { expected: [[1]], args: [[[1]]] },
  {
    expected: [
      [3, 1],
      [4, 2],
    ],
    args: [
      [
        [1, 2],
        [3, 4],
      ],
    ],
  },
  {
    expected: [
      [7, 4, 1],
      [8, 5, 2],
      [9, 6, 3],
    ],
    args: [
      [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ],
    ],
  },
  {
    expected: [
      [0, 1, 0],
      [0, 0, 1],
      [0, 1, 0],
    ],
    args: [
      [
        [0, 1, 0],
        [1, 0, 1],
        [0, 0, 0],
      ],
    ],
  },
];

logGroup("Challenge name: Matrix Rotate", () => {
  testData.forEach((test) => assertEquals(test.expected, rotate, ...test.args));
});
