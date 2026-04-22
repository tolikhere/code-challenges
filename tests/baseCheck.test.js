import { isValidNumber } from "../js/baseCheck.js";
import { assertEquals } from "../utils/assertEquals.js";
import { logGroup } from "../utils/logGroup.js";

const testData = [
  { expected: true, args: ["10101", 2] },
  { expected: false, args: ["10201", 2] },
  { expected: true, args: ["76543210", 8] },
  { expected: false, args: ["9876543210", 8] },
  { expected: true, args: ["9876543210", 10] },
  { expected: false, args: ["ABC", 10] },
  { expected: true, args: ["ABC", 16] },
  { expected: true, args: ["Z", 36] },
  { expected: true, args: ["ABC", 20] },
  { expected: true, args: ["4B4BA9", 16] },
  { expected: false, args: ["5G3F8F", 16] },
  { expected: true, args: ["5G3F8F", 17] },
  { expected: false, args: ["abc", 10] },
  { expected: true, args: ["abc", 16] },
  { expected: true, args: ["AbC", 16] },
  { expected: true, args: ["z", 36] },
];

logGroup("Challenge name: Base Check", () => {
  testData.forEach((test) =>
    assertEquals(test.expected, isValidNumber, ...test.args),
  );
});
