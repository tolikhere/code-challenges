# 📝 Review: Matrix Rotate

## ✨ What’s great about your solution:

Congratulations on passing the challenge! Your use of `.reduceRight()` is highly creative. It directly solves the problem of needing to process the rows from bottom to top to build the clockwise rotation natively without needing an explicit array reversal step first.

### The Hidden Bug 🐞️: Rectangular Matrices

While your solution passes all the freeCodeCamp tests, it works only for square matrices. It will crash or return incorrect results on rectangular matrices.

1. **matrix[0].length === 1 Guard Clause:** If given a matrix with 5 rows and 1 column `[[1], [2], [3], [4], [5]]`, your guard clause returns it unchanged. However, a 90-degree clockwise rotation should transform it into a single row: [[5, 4, 3, 2, 1]].

2. **Array Allocation:** You initialized `const rotatedMatrix = Array(matrix.length);`. For a rectangular matrix (e.g., 2 rows, 3 columns), the rotated version must have **3 rows and 2 columns**. Allocating `matrix.length` reserves space for the wrong number of rows.

### 🚀 Performance Analysis

Let $R$ be the number of rows and $C$ be the number of columns in the matrix. Let $N$ be the total number of elements ($N = R \times C$).

- **Time Complexity:** $O(N)$.
  - Your `.reduceRight()` loops over every row exactly once ($\mathcal{O}(R)$).
  - Inside, your `for` loop executes exactly $C$ times per row ($\mathcal{O}(C)$).
  - `.push()` operates in $\mathcal{O}(1)$ constant time.
  - Total operations: $R \times C = N$. You cannot do better than this because you must touch every element at least once to rotate it.
- **Space Complexity:** $O(N)$.
  - You allocate a new matrix structure to hold the rotated data.
  - The total space scales linearly with the total number of elements $N$ stored in `rotatedMatrix`.

## 🛠 Refactoring Tips:

### 💡 1. The Modern Functional Approach (Fixes Bugs & Cleanest)

Using `Array.from()`, we can map columns to rows directly. This cleanly handles both square and rectangular matrices without mutating an accumulator.

```js
function rotate(matrix) {
  if (!matrix.length || !matrix[0].length) return matrix;

  const rows = matrix.length;
  const cols = matrix[0].length;

  // New matrix will have 'cols' number of rows
  return Array.from({ length: cols }, (_, colIndex) => {
    // Read from bottom row up to the top row for this specific column
    return Array.from({ length: rows }, (_, rowIndex) => {
      return matrix[rows - 1 - rowIndex][colIndex];
    });
  });
}
```

### 💡 1. The Optimized Imperative Approach (Fastest Performance)

If you want raw execution speed, nested standard `for` loops beat higher-order array methods (like `reduce` and `from`) because they avoid function overhead and engine abstractions.

```js
function rotate(matrix) {
  if (!matrix.length || !matrix[0].length) return matrix;

  const originalRows = matrix.length;
  const originalCols = matrix[0].length;

  // Pre-allocate the exact rectangular structure needed
  const rotated = Array.from({ length: originalCols }, () =>
    Array(originalRows),
  );

  // Direct matrix transposition mapping
  for (let r = 0; r < originalRows; r++) {
    for (let c = 0; c < originalCols; c++) {
      rotated[c][originalRows - 1 - r] = matrix[r][c];
    }
  }

  return rotated;
}
```

## 🤔💭 My thoughts

Yes, at first I solved this challenge by thinking about matrix as a square. But after AI pointed out me my bugs if I've had the rectangular matrix I refactored my solution and it helped me to make it more robust and shorter by got rid of `if/else` statement. Also I choose to use `.reduceRight()` because I didn't want to use loop but some method that will start from the end and it perfectly dit its job. And I didn't use `.fill([])` because it will fill the array by link to the array that you passed to `.fill()` method.
