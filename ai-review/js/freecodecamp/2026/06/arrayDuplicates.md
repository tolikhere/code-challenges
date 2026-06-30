# 📝 Review: Array Duplicates

## ✨ What’s great about your solution:
Your solution is excellent, clean, and highly efficient. Using a `Set` for tracking uniqueness and another for duplicates is the optimal approach for this problem.

### 🚀 Performance Analysis
Your current solution has a highly competitive time complexity and an optimal space complexity.
* **Time Complexity:** $O(N + K \log K)$
  * **Iteration:** $O(N)$ to loop through the array of size $N$, as `Set.has()` and `Set.add()` take $O(1)$ time on average.
  * **Sorting:** $O(K \log K)$ to sort the final duplicates array, where $K$ is the number of unique duplicates.
  * **Total:** In the worst-case scenario where almost all elements are duplicates, it simplifies to $O(N \log N)$.
* **Space Complexity:** $O(N)$
  * You store unique elements in `seen` and `duplicates` in duplicates.
  * In the worst case, this requires space proportional to the number of elements in the input array.

## 🛠 Refactoring Tips:

### 💡 1. Alternative Functional Approach
---
If you prefer a shorter, more declarative JavaScript style, you can use `filter`. However, note that this changes the Big O profile.

```js
function findDuplicatesFunctional(arr) {
  const duplicates = arr.filter((item, index) => arr.indexOf(item) !== index);
  return [...new Set(duplicates)].sort((a, b) => a - b);
}
```
* **Warning:** This functional approach has a time complexity of $O(N^2)$ because ``indexOf`` scans the array on every iteration. Your original Set-based approach is much better for large datasets.

## 🏆 Final Verdict
Your logic is top-tier.

## 🤔💭 My thoughts

When it comes to store data I always think about built in data structures like `Set` and `Map` first because they modern and highly optimized and their method super nice. Also I didn't want to crete nested loops so I come up with this solution. So I used `for of` loop that works with iterables instead of `forEach()` method and `Set` DS to store and check duplicated and in the end used `sort()` method to sort numbers.