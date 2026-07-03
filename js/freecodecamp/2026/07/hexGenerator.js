/*
Given a named CSS color string, generate a random hexadecimal (hex) color code that is dominant in the given color.

    The function should handle "red", "green", or "blue" as an input argument.
    If the input is not one of those, the function should return "Invalid color".
    The function should return a random six-character hex color code where the input color value is greater than any of the others.
    Example of valid outputs for a given input:

Input 	Output
"red" 	"FF0000"
"green" 	"00FF00"
"blue" 	"0000FF"
*/

/**
 * Generate a random hexadecimal (hex) color code that is dominant in the given color.
 * @param {string} color - A named CSS color.
 * @returns Returns a random hexadecimal color.
 */
export function generateHex(color) {
  const colors = {
    red: null,
    green: null,
    blue: null,
  };

  if (!Object.hasOwn(colors, color)) {
    return "Invalid color";
  }

  colors[color] = getRandomRGBColor(255, 1);

  for (const rgbColor in colors) {
    colors[rgbColor] ??= getRandomRGBColor(colors[color] - 1);
  }

  return Object.values(colors)
    .map((rgb) => rgb.toString(16).padStart(2, "0"))
    .join("")
    .toUpperCase();
}

/**
 * Generate a random rgb color from the input. Maximum rgb color is 255 and minimum is 0.
 * @param {number} maxRange - Maximum range for a random number.
 * @param {number} minRange - Optional minimum range for a random number. Default is 0.
 * @returns Random rgb color base on the input.
 */
function getRandomRGBColor(maxRange, minRange = 0) {
  return minRange + Math.floor(Math.random() * (maxRange - minRange + 1));
}
