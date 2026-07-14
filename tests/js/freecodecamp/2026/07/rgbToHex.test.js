import { rgbToHex } from "#js/freecodecamp/2026/07/rgbToHex.js";
import { assertEquals } from "#utils/assertEquals.js";
import { logGroup } from "#utils/logGroup.js";

const testData = [
  { expected: "#ffffff", args: ["rgb(255, 255, 255)"] },
  { expected: "#010b6f", args: ["rgb(1, 11, 111)"] },
  { expected: "#add8e6", args: ["rgb(173, 216, 230)"] },
  { expected: "#4f7bc9", args: ["rgb(79, 123, 201)"] },
];

logGroup("Challenge name: RGB to Hex", () => {
  testData.forEach((test) =>
    assertEquals(test.expected, rgbToHex, ...test.args),
  );
});
