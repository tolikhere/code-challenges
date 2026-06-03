# 📝 Review: Unnatural Prime

## ✨ What’s great about your solution:
Your solution shows a **great engineering mindset** by using `Math.sqrt()` to limit the loop. Running the loop up to the square root of a number is the absolute standard way to optimize a primality test.

### 🚀 Performance Analysis
* **Time Complexity:** $ \mathcal{O}(\sqrt{\vert{}N\vert{}}) $.
  * Your loop runs up to the square root of the absolute value of $N$, which is the mathematical optimum for a basic primality test.
* **Space Complexity:** $ \mathcal{O}(1) $.
  * You only allocate a single constant (`sqrt`) and a loop variable (`i`), matching the best possible memory footprint.

## 🛠 Refactoring Tips:

### 💡 1. Refactored Solution
---
You can skip even numbers in the loop to double the execution speed.

Since 2 is the only even prime, you can check 2 first and then start your loop at 3, incrementing by 2 (`i += 2`). This cuts the number of loop iterations exactly in half for large numbers.

```js
const isUnnaturalPrime = (n) => {
  const num = Math.abs(n);

  // 1. Clear guard clauses for numbers less than 2
  if (num < 2) return false;
  
  // 2. 2 is the only even prime number
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  // 3. Loop only odd numbers up to the square root
  const sqrt = Math.sqrt(num);
  for (let i = 3; i <= sqrt; i += 2) {
    if (num % i === 0) return false;
  }

  return true;
};
```

#### 🚀 Performance Analysis
* **Time Complexity:** $ \mathcal{O}(\sqrt{\vert{}N\vert{}}) $ (2x fewer iterations).
  * In your original solution, the loop checks every integer up to $ \sqrt{\vert{}N\vert{}} $.
  * In the refactored solution, it checks only odd integers up to $ \sqrt{\vert{}N\vert{}} $, making it exactly two times faster while retaining the same $ \mathcal{O}(\sqrt{\vert{}N\vert{}}) $ asymptotic complexity class.
* **Space Complexity:** $ \mathcal{O}(1) $.
  * No strings, arrays, or objects are created. Only a few numeric variables are allocated.

## 🏆 Final Verdict
Your code works flawlessly for every single edge case, including negative numbers, zero, and one. Your usage of `Math.abs` inside the square root was entirely sufficient to bound the loop correctly.
