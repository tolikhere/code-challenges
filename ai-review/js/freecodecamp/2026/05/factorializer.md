# 📝 Review: Factorializer

## ✨ What’s great about your solution:
**Your solution is excellent, clean, and optimal** for the constraints of this challenge. By starting the loop at `2` instead of `1`, you avoided an unnecessary multiplication step, which shows great attention to detail.

Because the input is strictly capped at a maximum of `20`, your iterative approach avoids the risk of stack overflow errors common to recursive solutions.

### 🚀 Performance Analysis
Your current solution performs minimal operations and uses almost no extra memory.
* **Time Complexity: O(n)** because the `for` loop runs exactly `n - 1` times.
* **Space Complexity: O(1)** because it only uses two variables (`result` and `i`) regardless of the input size.


## 🛠 Refactoring Tips:
Since the challenge constrains the input from `0` to `20`, you can optimize the code further using **lookup tables** or ensure safety against JavaScript's floating-point limitations.

### 💡 1. Look-up Table (Fastest Execution)
---
Because there are only 21 possible inputs (`0` to `20`), you can pre-compute the answers in an array. This changes your runtime from linear time to instant lookup.

```js
const FACTORIALS = [
  1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880, 3628800, 
  39916800, 479001600, 6227020800, 87178291200, 1307674368000, 
  20922789888000, 355687428096000, 6402373705728000, 
  121645100408832000, 2432902008176640000
];

const factorialLookup = (n) => FACTORIALS[n];
```

#### 🚀 Performance Analysis
* **Time Complexity: O(1)** (Instantaneous execution).
* **Space Complexity: O(1)** (The array size is permanently fixed at 21 elements).

### 💡 2. BigInt Implementation (For Large Numbers)
---
JavaScript `Number` types lose precision above `9007199254740991` (`Number.MAX_SAFE_INTEGER`). While `20`! just barely fits inside this limit, calculating `21`! or higher would break. Using `BigInt` future-proofs your code.

```js
const factorialBigInt = (n) => {
  let result = 1n;
  for (let i = 2n; i <= BigInt(n); i++) {
    result *= i;
  }
  return result;
};
```

#### 🚀 Performance Analysis
* **Time Complexity: O(n)**.
* **Space Complexity: O(1)**.

## 🏆 Final Verdict
Your solution is a perfect fit for the problem statement and passes all standard engineering criteria for an interview or platform challenge.