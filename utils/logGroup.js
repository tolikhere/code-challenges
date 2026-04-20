/**
 * @param {string} name - The name of the challenge
 * @param {Function} callback - The callback with all test to check
 */
export const logGroup = (name, callback) => {
  console.group(`\nChallenge name: ${name}`);
  try {
    callback();
  } finally {
    console.groupEnd();
  }
};
