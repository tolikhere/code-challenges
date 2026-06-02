import { decode } from "#js/freecodecamp/2026/06/messageDecoder.js";
import { assertEquals } from "#utils/assertEquals.js";
import { logGroup } from "#utils/logGroup.js";

const testData = [
  {
    expected: "This is a secret message.",
    args: ["Xlmw mw e wigvix qiwweki.", 4],
  },
  { expected: "Hello World!", args: ["Byffi Qilfx!", 20] },
  { expected: "Are you okay?", args: ["Zqd xnt njzx?", -1] },
  { expected: "freeCodeCamp", args: ["oannLxmnLjvy", 9] },
];

logGroup("Challenge name: Message Decoder", () => {
  testData.forEach((test) => assertEquals(test.expected, decode, ...test.args));
});
