import { generateHex } from "#js/freecodecamp/2026/07/hexGenerator.js";
import { assertEquals } from "#utils/assertEquals.js";
import { logGroup } from "#utils/logGroup.js";

const testData = [
  { expected: "Invalid color", args: ["yellow"] },
  { expected: true, args: ["red"] },
  { expected: true, args: ["green"] },
  { expected: true, args: ["blue"] },
];

/**
 * An object representing the decimal values of an RGB color.
 * @typedef {Object} RgbChannels
 * @property {number} red - The numeric value of the red channel (0-255).
 * @property {number} green - The numeric value of the green channel (0-255).
 * @property {number} blue - The numeric value of the blue channel (0-255).
 */

/**
 * Parses a 6-character hexadecimal color string into its decimal RGB channel components.
 *
 * @param {string} hexString - A 6-character hex color string (e.g., "FF0033").
 * @returns {RgbChannels} An object containing parsed decimal values for red, green, and blue.
 */
const hexToRgb = (hexString) => {
  return {
    red: parseInt(hexString.slice(0, 2), 16),
    green: parseInt(hexString.slice(2, 4), 16),
    blue: parseInt(hexString.slice(4, 6), 16),
  };
};

/**
 * Validates whether a specific color channel is strictly greater than all other channels.
 *
 * @param {string} hexColor - A 6-character hex color string to evaluate.
 * @param {"red" | "green" | "blue"} dominant - The name of the color channel expected to be dominant.
 * @returns {boolean} True if the specified channel is strictly greater than the other two channels, otherwise false.
 */
const isDominant = (hexColor, dominant) => {
  const rgbColor = hexToRgb(hexColor);
  console.log(`Dominant color is ${dominant}`, rgbColor);

  let minCount = 0;
  for (const color in rgbColor) {
    if (rgbColor[color] < rgbColor[dominant]) minCount++;
  }
  return minCount === 2;
};

logGroup("Challenge name: Hex Generator", () => {
  testData.forEach((test) =>
    assertEquals(
      test.expected,
      (color) => {
        const hex = generateHex(color);
        if (Number.isNaN(parseInt(hex, 16))) return hex;

        return isDominant(hex, color);
      },
      ...test.args,
    ),
  );
});
