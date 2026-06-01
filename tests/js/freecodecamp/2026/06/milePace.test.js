import { milePace } from "#js/freecodecamp/2026/06/milePace.js";
import { assertEquals } from "#utils/assertEquals.js";
import { logGroup } from "#utils/logGroup.js";

const testData = [
  { expected: "08:00", args: [3, "24:00"] },
  { expected: "06:45", args: [1, "06:45"] },
  { expected: "03:30", args: [2, "07:00"] },
  { expected: "04:36", args: [26.2, "120:35"] },
];

logGroup("Challenge name: Mile Pace", () => {
  testData.forEach((test) =>
    assertEquals(test.expected, milePace, ...test.args),
  );
});
