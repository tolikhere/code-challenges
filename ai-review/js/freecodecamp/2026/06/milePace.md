# 📝 Review: Mile Pace

## ✨ What’s great about your solution:
Your solution is **exceptionally robust and handles edge cases beautifully**!

Your use of `Math.round(seconds / miles)` is critical here—without it, Test 4 (`120:35` over `26.2` miles) would calculate a repeating decimal that would break formatting. Your approach of converting everything down to the smallest unit (seconds) before doing math is the gold standard for handling time calculations.

### 🚀 Performance Analysis
Because time values and formatting lengths are small and fixed, this function executes almost instantly.
* **Time Complexity:** $ \mathcal{O}(1) $ (Constant Time).
  * The `duration.split(":")` always produces an array of exactly 2 elements.
  * The `.reduce()` loop runs exactly twice.
  * `.padStart(2, 0)` checks a maximum of 2 characters. The number of operations does not scale with the inputs.
* **Space Complexity:** $ \mathcal{O}(1) $ (Constant Space).
  * The memory allocated for the split array, numeric calculations, and padded strings is static and tiny, regardless of the number of miles or duration size.

## 🛠 Refactoring Tips:

### 💡 1. Refactored Version
---
Your code is very clean, but it can be refactored to improve **readability** and **simplicity**.

#### The Simplification Points:
1. **Ditch `.reduce()` for Array Destructuring:** Since we know the time format is strictly `"MM:SS"`, splitting directly into `minutes` and `seconds` variables reads much more naturally than a reducer tracking indices.
2. **Consolidate Formatting:** Instead of a standalone `formatTime` helper function, modern JavaScript's `String.prototype.padStart()` allows you to pad the values directly in your return statement.

```js
const milePace = (miles, duration) => {
  // 1. Destructure split string and convert directly to numbers
  const [minStr, secStr] = duration.split(":");
  const totalSeconds = Number(minStr) * 60 + Number(secStr);

  // 2. Calculate average split pace in seconds
  const secPerMile = Math.round(totalSeconds / miles);
  const avgMinutes = Math.floor(secPerMile / 60);
  const avgSeconds = secPerMile % 60;

  // 3. Pad strings and return inline
  const mm = String(avgMinutes).padStart(2, "0");
  const ss = String(avgSeconds).padStart(2, "0");
  
  return `${mm}:${ss}`;
};
```

#### 🚀 Performance Analysis
* **Time Complexity:** $ \mathcal{O}(1) $ (Constant Time).
* **Space Complexity:** $ \mathcal{O}(1) $ (Constant Space).

## 🏆 Final Verdict
Your code is excellent. The refactored version simply shifts it away from an overly-abstract loop (`.reduce()`) toward explicit time math, which makes it easier for other developers to parse at a glance.
