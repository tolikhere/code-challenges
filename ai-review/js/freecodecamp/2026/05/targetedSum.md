# 📝 Review: Targeted Sum

## ✨ What’s great about your solution:

Your solution is creative and shows you are trying to utilize Set lookups for efficiency. However, it contains a critical logic bug regarding array values, breaks when handling negative numbers or decimals, and is accidentally slow due to .indexOf().

## 🛠 Refactoring Tips:

### 💡 1. Why the Current Code Fails on Edge Cases
---
1. **It Loops Over Values, Not Elements:** Your loop runs from `0` to `target / 2`. If your target is `6`, you only check the numbers `0, 1, 2`. If the array contains `[10, -4]` and the target is `6`, your loop never checks `-4` or `10`.

2. **Hidden O(N) Slowness:** Inside the loop, you use `arr.indexOf()`. As we discussed earlier, `indexOf()` is **O(N)**. Because it sits inside a loop, it ruins the performance benefit of your `Set`. If the target is `1,000,000`, your loop runs `500,000` times, scanning the array with `indexOf` on every single iteration.

3. **Negative numbers:** `findTarget([-2, 11], 9)`. The loop starts at `0`, so it never checks `-2`.

4. **Decimals / Floats:** `findTarget([2.5, 4.5], 7)`. Your loop increments by whole integers (`0, 1, 2, 3`), skipping `2.5` entirely.

### 💡 2. The O(N) Hash Map Method (Recommended)
---
Instead of a `Set`, use a `Map` or a plain JavaScript object. As you loop through the array, you calculate the `complement` (target minus current number). If the `complement` is already in your `map`, you found your match instantly.

```js
export const findTarget = (arr, target) => {
  const seen = {}; // Stores { number: index }

  for (let i = 0; i < arr.length; i++) {
    const currentNum = arr[i];
    const complement = target - currentNum;

    // Check if the complement was already seen
    if (complement in seen) {
      // Return indices in ascending order
      return [seen[complement], i];
    }

    // Store the current number and its index
    seen[currentNum] = i;
  }

  return "Target not found";
};
```

#### 🚀 Performance Analysis:
* **Time Complexity:** **O(N)** — It loops through the array exactly once.
* **Space Complexity:** **O(N)** — In the worst case, it stores all numbers in the object.

### 💡 3. How to Fix It While Keeping Your "Unique Values" Rule
---
To make your code fast **O(N)**, handle negative/large numbers, and guarantee ascending indices, you can use a `Set` to track the values you have already seen as you loop through the array elements:

```js
export const findTarget = (arr, target) => {
  const seenValues = new Set();

  for (let i = 0; i < arr.length; i++) {
    const currentNum = arr[i];
    const complement = target - currentNum;

    // Enforce your rule: the two numbers must be unique values
    if (complement !== currentNum && seenValues.has(complement)) {
      const firstIndex = arr.indexOf(complement);
      // Since 'firstIndex' was seen earlier, it is guaranteed to be smaller than 'i'
      return [firstIndex, i]; 
    }

    seenValues.add(currentNum);
  }

  return "Target not found";
};
```
