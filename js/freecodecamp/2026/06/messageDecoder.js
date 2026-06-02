/*
Given a secret message string, and an integer representing the number of letters that were used to shift the message to encode it, return the decoded string.

    A positive number means the message was shifted forward in the alphabet.
    A negative number means the message was shifted backward in the alphabet.
    Case matters, decoded characters should retain the case of their encoded counterparts.
    Non-alphabetical characters should not get decoded.
*/

/**
 * Decodes the message that was encoded with the shifted integer.
 *
 * - A positive number means the message was shifted forward in the alphabet.
 * - A negative number means the message was shifted backward in the alphabet.
 * - Retain the case of their encoded counterparts.
 * - Non-alphabetical characters not get decoded.
 * @param {string} message - The encoded message.
 * @param {number} shift -  The shift to decode the message.
 * @returns {string} Return the decoded string.
 */
export const decode = (message, shift) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const normalizedShift = shift % alphabet.length;
  let decodedMessage = "";

  for (const char of message) {
    const lowerCase = char.toLowerCase();
    const charIndex = alphabet.indexOf(lowerCase);

    if (charIndex === -1) {
      decodedMessage += char;
      continue;
    }
    // make sure that the index doesn't go negative and doesn't overflow.
    const decodedCharIndex =
      (alphabet.length + charIndex - normalizedShift) % alphabet.length;
    const decodedChar = alphabet[decodedCharIndex];
    decodedMessage +=
      lowerCase === char ? decodedChar : decodedChar.toUpperCase();
  }

  return decodedMessage;
};
