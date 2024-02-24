/**
 * @function isPalindrome
 * @description This function checks if the given string is a palindrome or not
 * @param {string} str
 * @returns {boolean}
 * @example
 * isPalindrome('madam') // true
 * isPalindrome('hello') // false
 * isPalindrome('racecar') // true
 **/

const isPalindrome = (str) => {
  /**
   * @constant regex
   * @description The pattern checks for the following:
   * - \W: Matches any non-word character
   * - _: Matches the underscore character
   * - g: global search
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
   * @type {RegExp}
   */
  const regex = /[\W_]/g;
  const lowerCaseStr = str.toLowerCase().replace(regex, "");
  const reverseString = lowerCaseStr.split("").reverse().join("");

  if (lowerCaseStr === reverseString) return true;

  return false;
};

document.getElementById("palindrome-form").onsubmit = (e) => {
  e.preventDefault();

  const input = document.getElementById("text-input").value;
  const resultElement = document.getElementById("result");

  if (!input) {
    alert("Please input a value");
    resultElement.style.display = "none";
  } else if (isPalindrome(input) && input.length > 0) {
    resultElement.style.display = "block";
    resultElement.innerHTML = `<b>${input}</b> is a palindrome`;
  } else {
    resultElement.style.display = "block";
    resultElement.innerHTML = `<b>${input}</b> is not a palindrome`;
  }
};
