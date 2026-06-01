/*
Given a number of miles ran, and a time in "MM:SS" (minutes:seconds) it took to run those miles,
return a string for the average time it took to run each mile in the format "MM:SS".

  Add leading zeros when needed.

*/

/**
 * Formats numbers with leading zeros when needed.
 * Example: 6:5 => 06:05.
 * @param {number} leftTime - Number on the left side.
 * @param {number} rightTime - Number on the right side.
 * @returns {string} Returns formatted time with leading zeros.
 */
const formatTime = (leftTime, rightTime) => {
  const formattedLeft = String(leftTime).padStart(2, 0);
  const formattedRight = String(rightTime).padStart(2, 0);
  return `${formattedLeft}:${formattedRight}`;
};

/**
 * Gets the average time to run each mile in the format "MM:SS". Add leading zeros when needed.
 * @param {number} miles - Number of miles ran.
 * @param {string} duration - Time in "MM:SS" (minutes:seconds).
 * @returns {string} Returns a string for the average time it took to run each mile in the format "MM:SS".
 */
export const milePace = (miles, duration) => {
  const seconds = duration
    .split(":")
    .reduce((sec, time, i) => (i === 0 ? sec + time * 60 : sec + +time), 0); // multiplying the first value by 60 to get seconds

  const secPerMile = Math.round(seconds / miles);
  const avgMinutes = Math.floor(secPerMile / 60);
  const avgSeconds = secPerMile % 60;

  return formatTime(avgMinutes, avgSeconds);
};
