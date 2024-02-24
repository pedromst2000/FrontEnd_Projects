/**
 * @function rot13
 * @description A function that takes a ROT13 encoded string as input and returns a decoded string.
 * @param {String} str
 * @returns {String}
 * @see https://en.wikipedia.org/wiki/Caesar_cipher
 * @example
 * rot13("SERR PBQR PNZC") should return "FREE CODE CAMP"
 * rot13("SERR CVMMN!") should return "FREE PIZZA!"
 * rot13("SERR YBIR?") should return "FREE LOVE?"
 */

const rot13 = (str) => {
  /**
   * @constant decoded
   * @description Explanation of the regular expression:
   * * [A-Z] - Match any uppercase letter from A to Z.
   * * g - Global search. The regular expression will test the string for all occurrences of the pattern.
   * * (char) - The character that is matched by the regular expression.
   * * char.charCodeAt(0) - Returns the Unicode value of the character at the specified index (0).
   * * % 26 - The remainder of the Unicode value divided by 26 (the number of letters in the English alphabet).
   * * + 65 - Add 65 to the remainder to get the Unicode value of the decoded character.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode
   * @returns {String} The decoded string.
   */

  const decoded = str.replace(/[A-Z]/g, (char) => {
    return String.fromCharCode((char.charCodeAt(0) % 26) + 65);
  });

  return decoded;
};

console.log(rot13("SERR PBQR PNZC")); // "FREE CODE CAMP"
console.log(rot13("SERR CVMMN!")); // "FREE PIZZA!"
console.log(rot13("SERR YBIR?")); // "FREE LOVE?"
