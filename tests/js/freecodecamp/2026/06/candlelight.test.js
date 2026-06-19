import { burnCandles } from "#js/freecodecamp/2026/06/candlelight.js";
import { assertEquals } from "#utils/assertEquals.js";
import { logGroup } from "#utils/logGroup.js";

const testData = [
  { expected: 13, args: [7, 2] },
  { expected: 12, args: [10, 5] },
  { expected: 29, args: [20, 3] },
  { expected: 22, args: [17, 4] },
  { expected: 3517, args: [2345, 3] },
];

logGroup("Challenge name: Candlelight", () => {
  testData.forEach((test) =>
    assertEquals(test.expected, burnCandles, ...test.args),
  );
});
