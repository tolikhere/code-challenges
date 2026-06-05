import { battle } from "#js/freecodecamp/2026/06/characterBattle.js";
import { assertEquals } from "#utils/assertEquals.js";
import { logGroup } from "#utils/logGroup.js";

const testData = [
  { expected: "We lost", args: ["Hello", "World"] },
  { expected: "We won", args: ["pizza", "salad"] },
  { expected: "We won", args: ["C@T5", "D0G$"] },
  { expected: "Opponent retreated", args: ["kn!ght", "orc"] },
  { expected: "We retreated", args: ["PC", "Mac"] },
  { expected: "It was a tie", args: ["Wizards", "Dragons"] },
  { expected: "It was a tie", args: ["Mr. Smith", "Dr. Jones"] },
];

logGroup("Challenge name: Character Battle", () => {
  testData.forEach((test) => assertEquals(test.expected, battle, ...test.args));
});
