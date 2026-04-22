import { spaceJam } from "../js/spaceJam.js";
import { assertEquals } from "../utils/assertEquals.js";
import { logGroup } from "../utils/logGroup.js";

const testData = [
  { expected: "F  R  E  E  C  O  D  E  C  A  M  P", arg: "freeCodeCamp" },
  {
    expected: "F  R  E  E  C  O  D  E  C  A  M  P",
    arg: "   free   Code   Camp   ",
  },
  { expected: "H  E  L  L  O  W  O  R  L  D  ?  !", arg: "Hello World?!" },
  { expected: "C  @  T  $  &  D  0  G  $", arg: "C@t$ & D0g$" },
  { expected: "A  L  L  Y  O  U  R  B  A  S  E", arg: "allyourbase" },
];

logGroup("Challenge name: S  P  A  C  E  J  A  M", () => {
  testData.forEach((test) => assertEquals(test.expected, spaceJam, test.arg));
});
