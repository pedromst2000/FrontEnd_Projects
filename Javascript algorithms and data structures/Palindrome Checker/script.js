/**
 * @function isPalindrome
 * @description A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
 * @param {String} str
 * @returns  {Boolean}
 * @example
 * isPalindrome("eye") // true
 * isPalindrome("race car") // true
 * isPalindrome("five|_/|four") // false
 * isPalindrome("1 eye for 1 eye") // false
 */

const isPalindrome = (str) => {
  const regex = /[_\W]/g;
  str = str.replace(regex, "").toLowerCase();

  let reverseString = str.split("").reverse().join("");

  if (str == reverseString) return true;

  return false;
};

console.log(isPalindrome("eye")); // true
console.log(isPalindrome("race car")); // true
console.log(isPalindrome("five|_/|four")); // false
console.log(isPalindrome("1 eye for 1 eye")); // false
