import { factorial } from "#js/freecodecamp/2026/05/factorializer.js";
import { assertEquals } from "#utils/assertEquals.js";
import { logGroup } from "#utils/logGroup.js";

const testData = [
  { expected: 1, args: [0] },
  { expected: 120, args: [5] },
  { expected: 2432902008176640000, args: [20] },
];

logGroup("Challenge name: Factorializer", () => {
  testData.forEach((test) =>
    assertEquals(test.expected, factorial, ...test.args),
  );
});
