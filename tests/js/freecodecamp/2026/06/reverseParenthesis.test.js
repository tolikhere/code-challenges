import { decode } from "#js/freecodecamp/2026/06/reverseParenthesis.js";
import { assertEquals } from "#utils/assertEquals.js";
import { logGroup } from "#utils/logGroup.js";

// 1000 pairs of brackets wrapping "f(Ce(re))o((e(aC)m)d)p" (freeCodeCamp)
// const characters = "a".repeat(1000);
// const open = `(${characters}`.repeat(1000);
// const close = `${characters})`.repeat(1000);
// const massiveInput = `${open}f(Ce(re))o((e(aC)m)d)p${close}`;

const testData = [
  { expected: "abcdef", args: ["(f(b(dc)e)a)"] },
  { expected: "freeCodeCamp", args: ["f(Ce(re))o((e(aC)m)d)p"] },
  { expected: "Can you read this?", args: ["((is?)(a(t d)h)e(n y( uo)r)aC)"] },
  // The Stress Test case
  // { expected: "freeCodeCamp", args: [massiveInput] } 
];


logGroup("Challenge name: Reverse Parenthesis", () => {
  testData.forEach((test) => assertEquals(test.expected, decode, ...test.args));
});
