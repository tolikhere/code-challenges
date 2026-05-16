import { areAnagrams } from "#js/freecodecamp/2026/05/anagramChecker.js";
import { assertEquals } from "#utils/assertEquals.js";
import { logGroup } from "#utils/logGroup.js";

const testData = [
  { expected: true, args: ["listen", "silent"] },
  { expected: true, args: ["School master", "The classroom"] },
  { expected: true, args: ["A gent lem an", "Elegant man"] },
  { expected: false, args: ["Hello", "World"] },
  { expected: false, args: ["apple", "banana"] },
  { expected: false, args: ["cat", "dog"] },
];

logGroup("Challenge name: Anagram Checker", () => {
  testData.forEach((test) =>
    assertEquals(test.expected, areAnagrams, ...test.args),
  );
});
