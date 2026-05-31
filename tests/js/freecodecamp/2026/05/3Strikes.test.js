import { squaresWithThree } from "#js/freecodecamp/2026/05/3Strikes.js";
import { assertEquals } from "#utils/assertEquals.js";
import { logGroup } from "#utils/logGroup.js";

const testData = [
  { expected: 0, args: [1] },
  { expected: 1, args: [10] },
  { expected: 19, args: [100] },
  { expected: 326, args: [1000] },
  { expected: 4531, args: [10000] },
];

logGroup("Challenge name: 3 Strikes", () => {
  testData.forEach((test) =>
    assertEquals(test.expected, squaresWithThree, ...test.args),
  );
});
