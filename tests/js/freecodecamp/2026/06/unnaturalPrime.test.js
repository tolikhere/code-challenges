import { isUnnaturalPrime } from "#js/freecodecamp/2026/06/unnaturalPrime.js";
import { assertEquals } from "#utils/assertEquals.js";
import { logGroup } from "#utils/logGroup.js";

const testData = [
  { expected: false, args: [1] },
  { expected: false, args: [-1] },
  { expected: true, args: [2] },
  { expected: true, args: [19] },
  { expected: true, args: [-23] },
  { expected: false, args: [0] },
  { expected: true, args: [97] },
  { expected: true, args: [-61] },
  { expected: false, args: [99] },
  { expected: false, args: [-44] },
];

logGroup("Challenge name: Unnatural Prime", () => {
  testData.forEach((test) =>
    assertEquals(test.expected, isUnnaturalPrime, ...test.args),
  );
});
