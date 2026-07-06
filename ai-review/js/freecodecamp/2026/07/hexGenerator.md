# 📝 Review: Hex Generator

## ✨ What’s great about your solution:
Great job! This is a highly creative and structured solution. You handled the strict dominance rule by dynamically passing a ceiling (colors[color] - 1) to the secondary colors, which guarantees the primary color wins.

### 🚀 Performance Analysis
Because the input size is constant (the object always has exactly 3 color keys), the algorithmic complexity is fixed.

* **Time Complexity:** $O(1)$.
  * The `for...in` loop always runs exactly 3 times.
  * The `.map()` and `.join()` array operations always process exactly 3 elements.

* **Space Complexity:** $O(1)$.
  * The colors object and the mapped array always take up the same tiny amount of memory, regardless of the input string.

## 🛠 Refactoring Tips:

### 💡 1. Optimized Code
---

```js
function generateHex(color) {
  // 1. Validate input early
  const validColors = ["red", "green", "blue"];
  if (!validColors.includes(color)) {
    return "Invalid color";
  }

  // 2. Dominant color must be at least 2 so others can be strictly lower (e.g. 2 > 1 > 0)
  const minDominant = 2; 
  const dominantValue = Math.floor(Math.random() * (255 - minDominant + 1)) + minDominant;

  // 3. Helper to get a strictly lower value
  const getLowerValue = () => Math.floor(Math.random() * dominantValue);

  // 4. Assign values based on chosen type
  const rgb = {
    red:   color === "red"   ? dominantValue : getLowerValue(),
    green: color === "green" ? dominantValue : getLowerValue(),
    blue:  color === "blue"  ? dominantValue : getLowerValue()
  };

  // 5. Convert to 6-character Hex string
  return [rgb.red, rgb.green, rgb.blue]
    .map(val => val.toString(16).padStart(2, "0"))
    .join("")
    .toUpperCase();
}

```

## 🤔💭 My thoughts

I come up with this solution because it's pretty readable handle the edge flawlessly. Data that saved in the object then convert it to an array and after that map data is normal because there're only 3 items in the object.
