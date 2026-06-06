import { toCamelCase } from "#js/freecodecamp/2026/06/camelCase.js";
import { assertEquals } from "#utils/assertEquals.js";
import { logGroup } from "#utils/logGroup.js";

const testData = [
  { expected: "helloWorld", args: ["hello world"] },
  { expected: "helloWorld", args: ["HELLO WORLD"] },
  { expected: "secretAgentX", args: ["secret agent-X"] },
  { expected: "freeCodeCamp", args: ["FREE cODE cAMP"] },
  {
    expected: "yeOldSeaFaringBuccaneerWithAPegLegAndAParrotNamedSquawk",
    args: [
      "ye old-_-sea  faring_buccaneer_-_with a - peg__leg----and a_parrot_ _named- _squawk",
    ],
  },
];

logGroup("Challenge name: camelCase", () => {
  testData.forEach((test) =>
    assertEquals(test.expected, toCamelCase, ...test.args),
  );
});
