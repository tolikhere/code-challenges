/*
Given a CSS rgb(r, g, b) color string, return its hexadecimal equivalent.

Here are some example outputs for a given input:
Input 	Output
"rgb(255, 255, 255)" 	"#ffffff"
"rgb(1, 2, 3)" 	"#010203"

    Make any letters lowercase.
    Return a # followed by six characters. Don't use any shorthand values.
*/

/**
 * Converts an RGB string to its hexadecimal representation.
 *
 * @example
 * rgbToHex("rgb(255, 255, 255)") // returns "#ffffff"
 *
 * @param {string} rgb - The RGB color string to convert.
 * @returns {string} The hexadecimal color code prefixed with a # sign.
 */
export function rgbToHex(rgb) {
  return rgb.replace(/\D+([\d]+)\D+([\d]+)\D+([\d]+)\D+/, (match, r, g, b) => {
    const rHex = formatChannelToHex(r);
    const gHex = formatChannelToHex(g);
    const bHex = formatChannelToHex(b);

    return `#${rHex}${gHex}${bHex}`;
  });
}

/**
 * Converts a single RGB channel value into a two-character hexadecimal string.
 *
 * @param {string|number} channel - The individual color channel value (0-255).
 * @returns {string} A padded, two-character hexadecimal string.
 */
function formatChannelToHex(channel) {
  return Number(channel).toString(16).padStart(2, "0");
}
