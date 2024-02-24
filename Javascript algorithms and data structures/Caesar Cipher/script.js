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
  const decoded = str.replace(/[A-Z]/g, (char) => {
    return String.fromCharCode((char.charCodeAt(0) % 26) + 65);
  });

  return decoded;
};

console.log(rot13("SERR PBQR PNZC")); // "FREE CODE CAMP"
console.log(rot13("SERR CVMMN!")); // "FREE PIZZA!"
console.log(rot13("SERR YBIR?")); // "FREE LOVE?"
