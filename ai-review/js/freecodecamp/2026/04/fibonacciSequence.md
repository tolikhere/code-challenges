# 📝 Review: Fibonacci Sequence

## ✨ What’s great about your solution:

* **Readable Logic:** Your code is very easy to follow.
* **Edge Case Handling:** You correctly handled the `length === 0`case immediately.
* **Flexibility:** Using startSequence as a base allows it to work with non-standard Fibonacci starts (like `[10, 20]`), which is exactly what the prompt asked for.

## 🛠 Refactoring Tips:

### 💡 1. The "Clean & Safe" Version
---
By using the spread operator `[...]`, you create a fresh copy so you don't mess up the 
user's original data. Also, your loop goes a bit too far 
(it calculates length extra numbers and then slices them off). 
We can stop the loop exactly when the array reaches the desired length.

```js
function fibonacciSequence1(startSequence, length) {
  if (length === 0) return [];
  if (length === 1) return [startSequence[0]];

  // Create a copy so we don't mutate the original input
  const result = [...startSequence];

  // Only loop if we actually need more numbers
  while (result.length < length) {
    result.push(result.at(-2) + result.at(-1));
  }

  // Slice in case the input startSequence was already longer than the length
  return result.slice(0, length);
}
```

### 💡 2. Why `while` instead of `for`?
---
Using `while (result.length < length)` is very "semantic." 
It reads like a sentence: "While the result is too short, keep adding numbers." 
It also avoids having to do math on the loop index `i`.
