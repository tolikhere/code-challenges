/*
https://www.freecodecamp.org/learn/daily-coding-challenge/2025-08-13

Fibonacci Sequence

The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones. 
When starting with 0 and 1, the first 10 numbers in the sequence are 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.

Given an array containing the first two numbers of a Fibonacci sequence, and an integer representing 
the length of the sequence, return an array containing the sequence of the given length.

    Your function should handle sequences of any length greater than or equal to zero.
    If the length is zero, return an empty array.
    Note that the starting numbers are part of the sequence.

*/

/******** MY SOLUTION ********/
/**
 * Handles the Fibonacci sequence of any length greater than or equal to zero.
 * If the length is zero, return an empty array.
 * Note that the starting two numbers are part of the sequence.
 * @param {number[]} startSequence - An array containing the first two numbers of a Fibonacci sequence
 * @param {number} length - An integer representing the length of the sequence
 * @returns {number[]} - Return an array containing the sequence of the given length
 */
export function fibonacciSequence(startSequence, length) {
  if (length === 0) return [];
  const result = [...startSequence];

  for (let i = result.length; i < length; i++) {
    result.push(result.at(-2) + result.at(-1));
  }

  return result.slice(0, length);
}

/* AI review to my code */

// The Good Stuff

//     Readable Logic: Your code is very easy to follow.
//     Edge Case Handling: You correctly handled the length === 0 case immediately.
//     Flexibility: Using startSequence as a base allows it to work with non-standard
//       Fibonacci starts (like [10, 20]), which is exactly what the prompt asked for.

/******** AI SOLUTION ********/

/*
1. The "Clean & Safe" Version
By using the spread operator [...], you create a fresh copy so you don't mess up the 
user's original data. Also, your loop goes a bit too far 
(it calculates length extra numbers and then slices them off). 
We can stop the loop exactly when the array reaches the desired length.
*/

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

/*
2. Why while instead of for?
Using while (result.length < length) is very "semantic." 
It reads like a sentence: "While the result is too short, keep adding numbers." 
It also avoids having to do math on the loop index i.
*/
