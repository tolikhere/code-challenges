# 📝 Review: Roman Numeral Parser

## ✨ What’s great about your solution:

Your solution is **efficient, clever, and structurally clean**. Your logic for handling the subtractive combinations (like "IV" or "XCIX") by adding the current value and then subtracting twice the previous value is a very smart approach that allows you to parse the string in a single forward pass.

### 🚀 Performance Analysis

- **Time Complexity:** $O(N)$. Where $N$ is the length of the input string numeral. You loop through the string exactly once. Inside the loop, looking up a key in the romanNumbers object, adding, and comparing are all $\mathcal{O}(1)$ constant-time operations.

- **Space Complexity:** $O(1)$. The `romanNumbers` hash map has a fixed size of 7 elements regardless of how long the input string is. The space used by your variables (`result`, `prev`, `curr`) is also constant.

## 🛠 Refactoring Tips:

### 💡 1. The Backward Pass (Alternative Architecture)

Many developers prefer reading Roman numerals **right-to-left**. If you loop backward, the math becomes even simpler: if the current value is less than the previous value, you subtract it. Otherwise, you add it. You don't have to do the `prev * 2` math trick.

```js
function parseRomanNumeralBackward(numeral) {
  if (!numeral.length) throw new Error("Empty string");

  const romanNumbers = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let result = 0;
  let prev = 0;

  // Loop from right to left
  for (let i = numeral.length - 1; i >= 0; i--) {
    const curr = romanNumbers[numeral[i]];

    if (curr < prev) {
      result -= curr; // Subtractive tracking
    } else {
      result += curr; // Additive tracking
    }

    prev = curr;
  }
  return result;
}
```

---

## 🏆 Final Verdict

**Score: 9.5/10**.

You bypassed the naive approach of checking pairs of strings (like looking ahead for "IV", "IX"), which often results in messy conditional blocks. Your solution is highly performant, easy to read, and optimal in terms of memory.

## 🤔💭 My thoughts

Yes I wanted to use `if/else` but then I thought why not to try to solve it differently and that's how I came upt with `prev * 2` solution. I like it and it does the job. Also the function throws errors if the input not valid, they make the program more series!
