/*
Given a matrix (an array of arrays), rotate the matrix 90 degrees clockwise and return it.
For instance, given [[1, 2], [3, 4]].
You should return [[3, 1], [4, 2]].
*/

/**
 * Rotates a 2D matrix 90 degrees clockwise.
 * @param {any[][]} matrix - The 2D matrix to rotate.
 * @returns {any[][]} A new 2D matrix rotated 90 degrees clockwise.
 */
export function rotate(matrix) {
  if (!matrix.length || !matrix[0].length) return matrix;

  const rotatedMatrix = Array.from({ length: matrix[0].length }, () => []);

  return matrix.reduceRight((acc, row) => {
    for (let i = 0; i < row.length; i++) {
      acc[i].push(row[i]);
    }

    return acc;
  }, rotatedMatrix);
}
