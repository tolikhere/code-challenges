/*
Given two strings representing your army and an opposing army, each character from your army battles the character at the same position from the opposing army using the following rules:

    Characters a-z have a strength of 1-26, respectively.
    Characters A-Z have a strength of 27-52, respectively.
    Digits 0-9 have a strength of their face value.
    All other characters have a value of zero.
    Each character can only fight one battle.

For each battle, the stronger character wins. The army with more victories, wins the war. Return the following values:

    "Opponent retreated" if your army has more characters than the opposing army.
    "We retreated" if the opposing army has more characters than yours.
    "We won" if your army won more battles.
    "We lost" if the opposing army won more battles.
    "It was a tie" if both armies won the same number of battles.

*/

/**
 * Gets the power of the character in a string according to the rule.
 * Only the first character in the string will be evaluated:
 *
 * - Characters a-z have a strength of 1-26, respectively.
 * - Characters A-Z have a strength of 27-52, respectively.
 * - Digits 0-9 have a strength of their face value.
 * - All other characters have a value of zero.
 * - Each character can only fight one battle.
 * @param {string} char - Any character in a string form.
 * @returns {number} Return the power of that character.
 */
const getStrength = (char) => {
  const code = char.charCodeAt(0);

  // Lowercase letters (a-z: 97-122)
  if (code >= 97 && code <= 122) return code - 96;
  // Uppercase letters (A-Z: 65-90)
  if (code >= 65 && code <= 90) return code - 65 + 27;
  // Digits 0-9 (0-9: 48-57) skipping 0 here with "code > 48"
  if (code > 48 && code <= 57) return code - 48;

  return 0;
};

/**
 * Determines which army will win the battle and gives feedback.
 * @param {string} myArmy - String representing your army.
 * @param {string} opposingArmy - String representing an opposing army.
 * @returns {string} Returns a string with the battle result.
 */
export const battle = (myArmy, opposingArmy) => {
  if (myArmy.length > opposingArmy.length) return "Opponent retreated";
  if (myArmy.length < opposingArmy.length) return "We retreated";

  let winnerScore = 0;
  for (let i = 0; i < myArmy.length; i++) {
    const myPower = getStrength(myArmy[i]);
    const opposingPower = getStrength(opposingArmy[i]);

    if (myPower === opposingPower) continue;

    winnerScore += myPower > opposingPower ? 1 : -1;
  }

  if (winnerScore > 0) return "We won";
  if (winnerScore < 0) return "We lost";

  return "It was a tie";
};
