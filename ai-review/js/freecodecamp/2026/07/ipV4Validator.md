# 📝 Review: IPv4 Validator

## ✨ What’s great about your solution:
Your solution is clean, readable, and successfully passes all the test cases. You made good use of modern JavaScript methods like `split()` and `every()`.

### 🚀 Performance Analysis

Let \(N\) be the length of the input string `ipv4`.

*Note: Since a valid IPv4 address has a maximum length of 15 characters, the time complexity in practice is $O(1)$ (constant time). But theoretically relative to string length, it scales linearly as $O(N)$.*

* **Time Complexity:** $O(N)$. Splitting the string takes $O(N)$ time. Iterating through the 4 segments takes $O(N)$ time overall because the total characters processed equals $N$.

* **Space Complexity:** $O(N)$. The `split(".")` method creates a new array of strings. The memory usage scales with the size of the input string.

## 🛠 Refactoring Tips:

### 💡 1. Code Critique & Hidden Bugs
---

* **The White Space Trap:** You used `num.trim() === ""`, but +num will convert strings with spaces (like `" 5 "`) into valid numbers. Your code would let `"192.168. 1 .1"` pass as valid because `num.startsWith("0")` is false, `isNaN` is false, and it is between 0 and 255.

* **The Plus (`+`) Operator Flaw:** The unary plus operator converts hexadecimal strings (like `"0x1"`) and exponents (like `"1e2"`) into numbers. Your code would mistakenly validate `"192.168.0x1.1"`.

* **The `isNaN` Check:** `isNaN()` allows signs. For example, `"-5"` or `"+5"` are seen as numbers. Your code handles negative numbers via `num >= 0`, but a string like `"+5"` might bypass your leading-zero check.

### 💡 2. The String/Regex Approach (Recommended)
---
This approach completely avoids number conversion traps by checking character codes directly.

```js
function isValidIPv4(ipv4) {
  const parts = ipv4.split(".");
  if (parts.length !== 4) return false;

  return parts.every(num => {
    // Check length boundaries and leading zeros
    if (num.length === 0 || num.length > 3) return false;
    if (num.length > 1 && num[0] === '0') return false;
    
    // Ensure only digits exist (prevents spaces, signs, hex, exponents)
    if (!/^\d+$/.test(num)) return false;

    // Check value range
    const value = parseInt(num, 10);
    return value >= 0 && value <= 255;
  });
}
```

#### 🚀 Performance Analysis

* **Time Complexity:** $O(N)$. Visiting each character in the string a constant number of times.

* **Space Complexity:** $O(N)$. It still uses `split(".")`, which allocates memory for the array segments.

### 💡 3. The Ultra-Fast Loop (No Array Creation)
---
If you want maximum performance, you can validate the string in a single pass without splitting it into an array.

```js
function isValidIPv4(ipv4) {
  let count = 0;
  let len = ipv4.length;
  let i = 0;

  while (i < len) {
    let start = i;
    while (i < len && ipv4[i] !== '.') {
      if (ipv4[i] < '0' || ipv4[i] > '9') return false; // Non-digit
      i++;
    }
    
    let segment = ipv4.substring(start, i);
    if (segment.length === 0 || segment.length > 3) return false;
    if (segment.length > 1 && segment[0] === '0') return false;
    if (parseInt(segment, 10) > 255) return false;

    count++;
    i++; // Skip the dot
  }

  // Ensure exactly 4 segments and no trailing dot issues
  return count === 4 && ipv4[len - 1] !== '.';
}
```

#### 🚀 Performance Analysis

* **Time Complexity:** $O(N)$. Visiting each character in the string a constant number of times.

* **Space Complexity:** $O(1)$. This is a memory optimization. It uses a few pointers and integer variables. It does not allocate arrays, making it highly memory efficient for high-throughput systems.

## 🤔💭 My thoughts

At first I wanted to solve this challenge using a regex, but then I thought: *"Can I solve it without a regex?"*. I'm glad that I chose a solution without the regex, because an AI showed the room for improvement.

I split the ipv4 to early return. Then I use the `every()` method to validate all numbers in the array, so it automatically quit if there is NaN.

After the AI pointed out my hidden bugs in the code. I decided to refactor the solution. And that was the right thing to do.

By combining character boundary checks (`digit < "0"` || `digit > "9"`) with length limits and value ranges, I have successfully neutralized every single hidden JavaScript type-coercion trap (whitespace, signs, hex representations, and exponents).
