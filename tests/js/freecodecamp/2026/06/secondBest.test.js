import { getLaptopCost } from "#js/freecodecamp/2026/06/secondBest.js";
import { assertEquals } from "#utils/assertEquals.js";
import { logGroup } from "#utils/logGroup.js";

const testData = [
  { expected: 1800, args: [[1500, 2000, 1800, 1400], 1900] },
  { expected: 1800, args: [[1500, 2000, 2000, 1800, 1400], 1900] },
  { expected: 1899, args: [[2099, 1599, 1899, 1499], 2200] },
  { expected: 0, args: [[2099, 1599, 1899, 1499], 1000] },
  { expected: 1400, args: [[1200, 1500, 1600, 1800, 1400, 2000], 1450] },
];

logGroup("Challenge name: Second Best", () => {
  testData.forEach((test) =>
    assertEquals(test.expected, getLaptopCost, ...test.args),
  );
});
