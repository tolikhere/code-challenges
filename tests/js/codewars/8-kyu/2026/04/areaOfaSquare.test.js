import { squareArea } from "../../../../../../js/codewars/8-kyu/2026/04/areaOfaSquare.js";
import { assertEquals } from "../../../../../../utils/assertEquals.js";
import { logGroup } from "../../../../../../utils/logGroup.js";

const testData = [
  { expected: 1.6211389382774046, arg: 2 },
  { expected: 0, arg: 0 },
  { expected: 80.00421981582636, arg: 14.05 },
];

logGroup("Challenge name: Area of a Square (8-kyu)", () => {
  testData.forEach((test) => assertEquals(test.expected, squareArea, test.arg));
});
