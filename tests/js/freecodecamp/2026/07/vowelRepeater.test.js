import { repeatVowels } from "#js/freecodecamp/2026/07/vowelRepeater.js";
import { assertEquals } from "#utils/assertEquals.js";
import { logGroup } from "#utils/logGroup.js";

const testData = [
  { expected: "helloo wooorld", args: ["hello world"] },
  { expected: "freeeCooodeeeeCaaaaamp", args: ["freeCodeCamp"] },
  { expected: "AEeIiiOoooUuuuu", args: ["AEIOU"] },
  {
    expected:
      "I liikeee eeeeaaaaatiiiiiing iiiiiiiceeeeeeee creeeeeeeeeaaaaaaaaaam iiiiiiiiiiin Iiiiiiiiiiiiceeeeeeeeeeeeelaaaaaaaaaaaaaand",
    args: ["I like eating ice cream in Iceland"],
  },
];

logGroup("Challenge name: Vowel Repeater", () => {
  testData.forEach((test) =>
    assertEquals(test.expected, repeatVowels, ...test.args),
  );
});
