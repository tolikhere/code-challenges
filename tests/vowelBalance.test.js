import { isBalanced } from "../js/vowelBalance.js";
import { assertEquals } from "../utils/assertEquals.js";
import { logGroup } from "../utils/logGroup.js";

const testData = [
  { expected: true, arg: "racecar" },
  { expected: true, arg: "Lorem Ipsum" },
  { expected: false, arg: "string" },
  { expected: true, arg: " " },
  { expected: false, arg: "abcdefghijklmnopqrstuvwxyz" },
  { expected: true, arg: "123A#b!E&*456-o.U" },
];

logGroup(
  "Challenge name: Vowel Balance",
  () =>
    testData.forEach((test) => {
      assertEquals(test.expected, isBalanced, test.arg);
    }),
);
