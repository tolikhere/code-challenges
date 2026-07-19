import { isPangram } from "#js/freecodecamp/2026/07/pangram.js";
import { assertEquals } from "#utils/assertEquals.js";
import { logGroup } from "#utils/logGroup.js";

const testData = [
  { expected: true, args: ["hello", "helo"] },
  { expected: false, args: ["hello", "hel"] },
  { expected: false, args: ["hello", "helow"] },
  { expected: true, args: ["hello world", "helowrd"] },
  { expected: true, args: ["Hello World!", "helowrd"] },
  { expected: false, args: ["Hello World!", "heliowrd"] },
  { expected: false, args: ["freeCodeCamp", "frcdmp"] },
  {
    expected: true,
    args: [
      "The quick brown fox jumps over the lazy dog.",
      "abcdefghijklmnopqrstuvwxyz",
    ],
  },
];

logGroup("Challenge name: Pangram", () => {
  testData.forEach((test) =>
    assertEquals(test.expected, isPangram, ...test.args),
  );
});
