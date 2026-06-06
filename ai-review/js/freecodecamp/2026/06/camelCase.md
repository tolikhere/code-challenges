# 📝 Review: camelCase

## ✨ What’s great about your solution:
This is an incredibly elegant, concise, and highly effective solution. Your use of a single `.toLowerCase()` call followed by a `.replace()` with a regex callback is an industry-standard approach for string transformation. It passes all the test cases cleanly and reads very well.

However, there is one hidden edge case: **Leading Separators**.

To fix this while keeping your exact approach, you can simply trim or strip leading/trailing separators before processing, or adjust the regex.
### 🚀 Performance Analysis
* **Time Complexity:** $\mathcal{O}(N)$.
  * $N$ is the total length of the input string `s`.
  * `.toLowerCase()` scans the string once to mutate the characters, taking $\mathcal{O}(N)$ time.
  * `.replace()` with a global regex flag (`/g`) scans the string a second time from left to right.
  * The engine calls your callback function for every match. The work inside the callback (`.toUpperCase()`) operates on a single character, which is a constant-time $\mathcal{O}(1)$ operation.
  * Combined, the operations run sequentially $\mathcal{O}(2N)$, which simplifies to linear time $\mathcal{O}(N)$.
* **Space Complexity:** $\mathcal{O}(N)$.
  * `.toLowerCase()` allocates a new string in memory of size $N$.
  * `.replace()` allocates a final output string, which in the worst case (no separators found) is also of size $N$.
  * Thus, the auxiliary memory scales linearly with input size.

## 🛠 Refactoring Tips:

### 💡 1. The "No-Regex" Approach
---
A manual loop avoids allocating intermediate strings (like `.toLowerCase()` does) and skips the regex engine overhead entirely.

```js
const toCamelCase = (s) => {
  let result = "";
  let capitalizeNext = false;
  let hasFoundFirstWord = false;

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    // Check for separators: space (32), dash (45), underscore (95)
    if (char === ' ' || char === '-' || char === '_') {
      if (hasFoundFirstWord) {
        capitalizeNext = true;
      }
      continue;
    }

    // It's a valid character. Mark that the first word has started.
    hasFoundFirstWord = true;

    if (capitalizeNext) {
      result += char.toUpperCase();
      capitalizeNext = false;
    } else {
      result += char.toLowerCase();
    }
  }

  return result;
};
```

#### 🚀 Why this is a micro-optimization winner:
* **Single Pass:** It reads the string exactly once ($\mathcal{O}(N)$ with a single loop).
* **Zero Regex State:** No state machines are spinning up to test patterns.
* **Handles Edge Cases Automatically:** Leading separators are completely ignored and skipped because `hasFoundFirstWord` stays `false` until a real character hits.
## 🏆 Final Verdict
Your regex-based answer is great for production code because it is highly maintainable and short. However, if you are looking for absolute peak performance and a way to protect against leading separators, the manual single-loop approach wins.
