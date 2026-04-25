import { jbelmu } from "../../../../../js/freecodecamp/2026/04/jbelmudText.js";
import { assertEquals } from "../../../../../utils/assertEquals.js";
import { logGroup } from "../../../../../utils/logGroup.js";

const testData = [
  { expected: "hello wlord", arg: "hello world" },
  { expected: "i love jbelmud text", arg: "i love jumbled text" },
  {
    expected: "faccdeeemorp is my faiortve pacle to laern to cdoe",
    arg: "freecodecamp is my favorite place to learn to code",
  },
  {
    expected: "the qciuk borwn fox jmpus oevr the lazy dog",
    arg: "the quick brown fox jumps over the lazy dog",
  },
];

logGroup("Challenge name: Jbelmud Text", () => {
  testData.forEach((test) => assertEquals(test.expected, jbelmu, test.arg));
});
