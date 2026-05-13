# 📝 Review: Vowel Balance

## ✨ What’s great about your solution:

* **Correct Logic:** You handled the "ignore the center character" rule perfectly by shifting the middle index for odd lengths.
* **Modern Syntax:** Using `matchAll` with `toArray().length` is very readable.
* **Readability:** Breaking the counting into a helper function `getMatchCount` keeps the main logic focused.

## 🛠 Refactoring Tips:

### 💡 1. The Performance Tweak (The "One-Pass" approach)
Right now, you are slicing the string into two new strings (allocating memory) and then running two separate regex scans.
For a tiny string, it doesn't matter.
For a massive string, you could just loop once:

```js
function isBalanced1(s) {
  const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  let balance = 0;
  const half = Math.floor(s.length / 2);

  for (let i = 0; i < half; i++) {
    if (vowels.has(s[i])) balance++; // Add for first half

    // Calculate index for the second half, skipping the middle if odd
    const rightIndex = s.length - 1 - i;
    if (vowels.has(s[rightIndex])) balance--; // Subtract for second half
  }

  return balance === 0;
}
```

**Why this is "better"**: No new strings created, no regex engine overhead, and it stops at the halfway point.

### 💡 2. The Functional "Cool" Way (Using your v24 features)
If you want to keep it short and use those fancy new methods, you can simplify your middle logic:

```js
function isBalanced2(s) {
  const regex = /[aeiou]/gi;
  const mid = s.length / 2;

  // slice(0, mid) handles the first half
  // slice(-mid) automatically takes from the end backwards!
  const first = (s.slice(0, mid).match(regex) || []).length;
  const second = (s.slice(-mid).match(regex) || []).length;

  return first === second;
}
```

**Tip**: `s.slice(-mid)` is a great trick. If `mid` is `3`, it takes the last `3` characters.
If the string is length `7`, `mid` is `3.5`. `slice` truncates that to `3`, so it takes the last `3`, 
effectively skipping the middle character automatically!
