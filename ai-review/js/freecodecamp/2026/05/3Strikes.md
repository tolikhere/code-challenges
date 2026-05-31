# 📝 Review: 3 Strikes

## ✨ What’s great about your solution:
Your solution is very clever and highly practical! Starting your loop at `6` shows a great optimization shortcut because $ \mathcal1^2 $ through $ \mathcal5^2 (1, 4, 9, 16, 25) $ do not contain the digit `3`. The first square containing a `3` is $ 6^2 = 36 $.

### 🚀 Performance Analysis
Analyzing this requires looking at both the loop itself and the string operations happening inside it.
* **Time Complexity:** $ \mathcal{O}(n \log(n^2)) - $ which simplifies cleanly to $ \mathcal{O}(n \log n) $.
  * The loop runs `n` times.
  * Inside the loop, converting a square number to a string takes time proportional to the number of digits it has, which is  $ \mathcal{O}(\log(n^2)) $.
  * `.includes('3')` scans through those digits, taking linear time relative to the digit count.
* **Space Complexity:** $  \mathcal{O}(\log n) $.
  * For each iteration, `String(i ** 2)` generates a temporary string in memory representing the digits of the square. At $ n = 10,000 $ , $ n^2 = 100,000,000 $, requiring a string of up to 9 characters.

## 🛠 Refactoring Tips:

### 💡 1. Pure Mathematical Approach (No Strings)
---
If you want to avoid memory allocation for strings altogether, you can isolate digits mathematically using modulo (`% 10`) and division (`/ 10`) operators.

```js
const squaresWithThreeMath = (n) => {
  let count = 0;
  
  for (let i = 6; i <= n; i++) {
    let square = i * i;
    
    // Check digits from right to left
    while (square > 0) {
      if (square % 10 === 3) {
        count++;
        break; 
      }
      square = Math.floor(square / 10);
    }
  }
  
  return count;
};
```
***Note on Math Option:*** While this eliminates string memory allocation, JavaScript engines optimize string conversions incredibly well, so the pure mathematical approach might actually benchmark slightly slower due to the inner `while` loop operations.

#### 🚀 Performance Analysis
* **Time Complexity:** $ \mathcal{O}(n \log n) $.
* **Space Complexity:** $ \mathcal{O}(1) $.

## 🏆 Final Verdict
Your code is excellent, and starting the loop at `6` is a great optimization trick. Stick with a string-based approach for this style of digit-searching problem as it keeps the code highly maintainable!
