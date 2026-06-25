# 📝 Review: Candlelight

## ✨ What’s great about your solution:

Your solution is **excellent, highly efficient, and correctly uses a loop** to handle the candle recycling logic. You managed to avoid the common pitfall of forgetting to carry over the remaining leftovers (`leftovers %= leftoversNeeded`) when creating new candles.

### 🚀 Performance Analysis
* **Time Complexity:** $O(\log_{k} N)$, where $N$ is the initial number of `candles` and $k$ is `leftoversNeeded`. In each iteration of the loop, the number of leftovers is divided roughly by $k$. This means the loop runs logarithmically, making it incredibly fast even for massive inputs.

* **Space Complexity:** $O(N)$ constant space. You only allocate a few variables (`burnedCandles`, `leftovers`, `recycledCandles`), which use a fixed amount of memory regardless of the input size.

## 🛠 Refactoring Tips:

### 💡 1. The Mathematical Solution
---

Every time you recycle $k$ leftovers, you consume $k$ leftovers but get $1$ new candle back. This means each new candle effectively "costs" you a net total of $k - 1$ leftovers.The only constraint is that you cannot use your very last candle to create a new one (you need a full group of $k$ to start a recycle step). By subtracting $1$ from the initial pool to account for this boundary condition, we can calculate the total candles burned with a single math equation.

```js
function burnCandles(candles, leftoversNeeded) {
  if (candles === 0) return 0;
  return candles + Math.floor((candles - 1) / (leftoversNeeded - 1));
}
```

#### 🛠 Why this works:
* `candles`: You burn all your starting candles.
* `candles - 1`: The number of extra leftovers available for net recycling.
* `leftoversNeeded - 1`: The net cost in leftovers to generate one brand-new candle.

#### 🚀 Performance Analysis

* **Time Complexity:** $O(1)$ constant time. It executes a single mathematical formula instantly, regardless of how large the numbers are.
* **Space Complexity:** $O(1)$ constant space.

## 🏆 Final Verdict
The mathematical approach yields the exact same correct results for all of your test parameters in true constant time.
