# 📝 Review: Anagram Checker

## ✨ What’s great about your solution:
Clean, readable, and successfully passes the basic test cases.
## 🛠 Refactoring Tips:

### 💡 1. Optimized Sorting Method
---
```js
function areAnagramsSort(str1, str2) {
  const clean = str => [...str.toLowerCase().replace(/\s+/g, "")].sort().join("");
  return clean(str1) === clean(str2);
}
```
#### 🚀 Performance Analysis:
* **Time Complexity:** (O(Nlog N)) due to the sorting step.
* **Space Complexity:** (O(N)) because it creates arrays and new strings in memory.
* **Pros:** Short and easy to read.
* **Cons:** Slow for very long strings due to sorting.

### 💡 2. The Linear Time Method (Frequency Counter)
---
For maximum efficiency, use a Map or a plain JavaScript object to count character frequencies. This drops the time complexity to linear time.
```js
function areAnagrams(str1, str2) {
  // Remove spaces and lowercase everything
  const s1 = str1.toLowerCase().replace(/\s+/g, "");
  const s2 = str2.toLowerCase().replace(/\s+/g, "");

  // Quick exit: if lengths differ, they cannot be anagrams
  if (s1.length !== s2.length) return false;

  const charCounts = {};

  // Count characters in the first string
  for (const char of s1) {
    charCounts[char] = (charCounts[char] || 0) + 1;
  }

  // Decrement counts using the second string
  for (const char of s2) {
    if (!charCounts[char]) return false; 
    charCounts[char]--;
  }

  return true;
}
```

#### 🚀 Performance Analysis:
* **Time Complexity:** (O(N)) — It loops through the strings exactly once.
* **Space Complexity:** (O(1)) — The alphabet size is fixed, so the object memory stays small.
