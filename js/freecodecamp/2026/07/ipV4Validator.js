/*
Given a string, determine if it is a valid IPv4 Address.
A valid IPv4 address consists of four integer numbers separated by dots (.).
Each number must satisfy the following conditions:

  It is between 0 and 255 inclusive.
  It does not have leading zeros (e.g. 0 is allowed, 01 is not).
  Only numeric characters are allowed.
*/


//                                                       Refactored solution
/**
 * Checks the validity of an IPv4 address.
 * 
 * @example
 * isValidIPv4("192.168.1.1") // returns true
 * isValidIPv4("255.01.50.111") // returns false
 * 
 * @param {string} ipv4 - The IPv4 address string to validate.
 * @returns {boolean} True if it is a valid IPv4 address, otherwise false.
 */
export function isValidIPv4(ipv4) {
  const numbers = ipv4.split(".");

  if (numbers.length !== 4) return false;

  return numbers.every((num) => {
    if (!num || num.length > 3) return false;
    if (num.length > 1 && num.startsWith("0")) return false;
    for (const digit of num) {
      if (digit < "0" || digit > "9") return false;
    }

    return num <= 255;
  });
}

//                                                       Original solution

// export function isValidIPv4(ipv4) {
//   const numbers = ipv4.split(".");

//   if (numbers.length !== 4) return false;

//   return numbers.every(num => {
//     if (num.trim() === "") return false;
//     if (num.length > 1 && num.startsWith("0")) return false;
//     if (isNaN(+num)) return false;

//     return num >= 0 && num <= 255;
//   });
// }
