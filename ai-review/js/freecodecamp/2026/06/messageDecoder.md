# 📝 Review: Message Decoder

## ✨ What’s great about your solution:
Your solution is brilliant! You correctly handled a classic edge case by using `shift % alphabet.length`, which protects your code against massive shift integers (like shifting by `1000`). Your handling of negative wrap-around logic (`alphabet.length + charIndex - normalizedShift`) is also flawless.

### 🚀 Performance Analysis
* **Time Complexity:** $ \mathcal{O}(N) $, where $N$ is the length of the `message` string.
  * You loop through the message exactly once.
  * Inside the loop, `alphabet.indexOf(lowerCase)` runs in $ \mathcal{O}(1) $ constant time because the alphabet array size is permanently fixed at 26 characters.
* **Space Complexity:** $ \mathcal{O}(N) $ (Garbage collection heavy).
  * In JavaScript, strings are immutable. Every time you run `decodedMessage += ...`, a new string is allocated in memory. For a message of length $N$, this creates a linear memory footprint.

## 🛠 Refactoring Tips:

### 💡 1. Refactored ASCII Solution
---
Instead of looking up characters in an alphabet string, you can use **ASCII character codes** (`charCodeAt` and `String.fromCharCode`). This eliminates the need to maintain an `alphabet` string constant or call `.indexOf()`.

```js
function decode(message, shift) {
  // Normalize the shift to fit within the 26-letter alphabet
  const netShift = shift % 26;
  const result = [];

  for (let i = 0; i < message.length; i++) {
    const code = message.charCodeAt(i);

    // Uppercase letters (A-Z: 65-90)
    if (code >= 65 && code <= 90) {
      // Subtract netShift to reverse the encoding shift
      let decodedCode = ((code - 65 - netShift + 26) % 26) + 65;
      result.push(String.fromCharCode(decodedCode));
    } 
    // Lowercase letters (a-z: 97-122)
    else if (code >= 97 && code <= 122) {
      let decodedCode = ((code - 97 - netShift + 26) % 26) + 97;
      result.push(String.fromCharCode(decodedCode));
    } 
    // Non-alphabetical characters remain unchanged
    else {
      result.push(message[i]);
    }
  }

  return result.join("");
}
```

#### Why this refactor helps:
* **Array Pushing vs String Concatenation:** Pushing characters to an array (`result.push`) and calling `.join("")` at the end is a standard engineering optimization in JavaScript to avoid mutating strings continuously in memory.
* **No Case Conversions:** By inspecting ASCII ranges directly, we bypass the need to run `.toLowerCase()` or compare cases at the end of the loop.

#### 🚀 Performance Analysis
* **Time Complexity:** $ \mathcal{O}(N) $.
* **Space Complexity:** $ \mathcal{O}(N) $ (Optimized array memory).

## 🏆 Final Verdict
Your code is excellent for a platform challenge, and your math logic for handling wrap-around boundaries is spot-on. The ASCII variation is simply how engineers handle low-level cryptography algorithms at scale to maximize execution speed.
