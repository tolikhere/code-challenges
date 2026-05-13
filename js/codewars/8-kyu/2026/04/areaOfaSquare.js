/*
Complete the function that calculates the area of the square, when the length of the circular arc A is given as the input.
Note: use the π value provided in your language (Math::PI, M_PI, math.pi, etc)
*/

/**
 * Calculates square area based on a circle's arc length.
 * @param {number} A - The length of the circular arc.
 * @returns {number} Returns the area of the square.
 */
export const squareArea = (A) => {
  const radius = (A * 2) / Math.PI;
  return radius ** 2;
};
