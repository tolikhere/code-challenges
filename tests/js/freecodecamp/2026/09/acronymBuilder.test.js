import { buildAcronym } from "#js/freecodecamp/2026/09/acronymBuilder.js";
import { assertEquals } from "#utils/assertEquals.js";
import { logGroup } from "#utils/logGroup.js";

const testData = [
  { expected: "SEO", args: ["Search Engine Optimization"] },
  { expected: "FAQ", args: ["Frequently Asked Questions"] },
  { expected: "NASA", args: ["National Aeronautics and Space Administration"] },
  { expected: "FBI", args: ["Federal Bureau of Investigation"] },
  { expected: "FYI", args: ["For your information"] },
  { expected: "BTW", args: ["By the way"] },
  {
    expected: "AUHWPOTIMSH",
    args: [
      "An unstoppable herd of waddling penguins overtakes the icy mountains and sings happily",
    ],
  },
];

logGroup("Challenge name: Acronym Builder", () => {
  testData.forEach((test) =>
    assertEquals(test.expected, buildAcronym, ...test.args),
  );
});
