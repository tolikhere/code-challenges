import { sumOfSquares } from "#js/freecodecamp/2026/05/sumOfSquares.js";
import { assertEquals } from "#utils/assertEquals.js";
import { logGroup } from "#utils/logGroup.js";

const testData = [
  { expected: 55, args: [5] },
  { expected: 385, args: [10] },
  { expected: 5525, args: [25] },
  { expected: 41791750, args: [500] },
  { expected: 333833500, args: [1000] },
];

logGroup("Challenge name: Sum of Squares", () => {
  testData.forEach((test) =>
    assertEquals(test.expected, sumOfSquares, ...test.args),
  );
});
