/*
Given a matrix (an array of arrays), rotate the matrix 90 degrees clockwise and return it.
For instance, given [[1, 2], [3, 4]].
You should return [[3, 1], [4, 2]].
*/

/**
 *
 * @param {Array} matrix -
 * @returns {Array}
 */
export function rotate(matrix) {
  if (matrix.length <= 1 || matrix[0].length === 1) return matrix;

  const rotatedMatrix = Array(matrix.length);

  return matrix.reduceRight((acc, row) => {
    for (let i = 0; i < row.length; i++) {
      const rotatedRow = acc[i];

      if (rotatedRow) {
        rotatedRow.push(row[i]);
      } else {
        acc[i] = [row[i]];
      }
    }

    return acc;
  }, rotatedMatrix);
}
