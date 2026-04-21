/**
 * Uses console.group for nested logging
 * @param {string} message - The message to display for the heading
 * @param {Function} callback - The callback with all tests to check
 */
export const logGroup = (message, callback) => {
  console.group(`\n${message}`);
  try {
    callback();
  } finally {
    console.groupEnd();
  }
};
