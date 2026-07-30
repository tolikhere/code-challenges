import { isValidIPv4 } from "#js/freecodecamp/2026/07/ipV4Validator.js";
import { assertEquals } from "#utils/assertEquals.js";
import { logGroup } from "#utils/logGroup.js";

const testData = [
  { expected: true, args: ["192.168.1.1"] },
  { expected: true, args: ["0.0.0.0"] },
  { expected: false, args: ["255.01.50.111"] },
  { expected: false, args: ["255.00.50.111"] },
  { expected: false, args: ["256.101.50.115"] },
  { expected: false, args: ["192.168.101."] },
  { expected: false, args: ["192168145213"] },
];

logGroup("Challenge name: IPv4 Validator", () => {
  testData.forEach((test) =>
    assertEquals(test.expected, isValidIPv4, ...test.args),
  );
});
