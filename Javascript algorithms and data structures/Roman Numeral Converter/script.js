/**
 * @function convertToRoman - Convert the given number into a roman numeral.
 * @description - This function takes a number and converts it into a roman numeral.
 * @param {number} num - The number to convert.
 * @returns {string} - The converted number.
 * @throws {Error}  - Please enter a valid number.
 * @throws {Error} - Please enter a number greater than or equal to 1.
 * @throws {Error} - Please enter a number less than or equal to 3999.
 * @example
 * convertToRoman(2) // "II"
 * convertToRoman(3) // "III"
 * convertToRoman(435) // "CDXXXV"
 * convertToRoman(4300) // "Please enter a number less than or equal to 3999"
 * convertToRoman(-1) // "Please enter a number greater than or equal to 1"
 * convertToRoman("hello") // "Please enter a valid number"
 */

const convertToRoman = (num) => {
  /**
   * @constant {object} romanNumeral - An object that contains the roman numeral and its equivalent number.
   * @description - This object contains the roman numeral and its equivalent number.
   * @property {number} M - 1000
   * @property {number} CM - 900
   * @property {number} D - 500
   * @property {number} CD - 400
   * @property {number} C - 100
   * @property {number} XC - 90
   * @property {number} L - 50
   * @property {number} XL - 40
   * @property {number} X - 10
   * @property {number} IX - 9
   * @property {number} V - 5
   * @property {number} IV - 4
   * @property {number} I - 1
   */

  const romanNumeral = [
    {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    },
  ];

  let result = "";

  try {
    if (num === "" || isNaN(num)) {
      throw new Error("Please enter a valid number");
    }
    if (num <= 0) {
      throw new Error("Please enter a number greater than or equal to 1");
    } else if (num > 3999) {
      throw new Error("Please enter a number less than or equal to 3999");
    }

    romanNumeral.forEach((key) => {
      for (let i in key) {
        while (num >= key[i]) {
          result += i;
          num -= key[i];
        }
      }
    });

    return result;
  } catch (error) {
    // console.log(error.message);
    return error.message;
  }
};

console.log(convertToRoman(2)); // "II"
console.log(convertToRoman(3)); // "III"
console.log(convertToRoman(4)); // "IV"
console.log(convertToRoman(5)); // "V"
console.log(convertToRoman(9)); // "IX"
console.log(convertToRoman(12)); // "XII"
console.log(convertToRoman(16)); // "XVI"
console.log(convertToRoman(29)); // "XXIX"
console.log(convertToRoman(44)); // "XLIV"
console.log(convertToRoman(45)); // "XLV"
console.log(convertToRoman(68)); // "LXVIII"
console.log(convertToRoman(83)); // "LXXXIII"
console.log(convertToRoman(97)); // "XCVII"
console.log(convertToRoman(99)); // "XCIX"
console.log(convertToRoman(400)); // "CD"
console.log(convertToRoman(500)); // "D"
console.log(convertToRoman(501)); // "DI"
console.log(convertToRoman(649)); // "DCXLIX"
console.log(convertToRoman(798)); // "DCCXCVIII"
console.log(convertToRoman(891)); // "DCCCXCI"
console.log(convertToRoman(1000)); // "M"
console.log(convertToRoman(1004)); // "MIV"
console.log(convertToRoman(1006)); // "MVI"
console.log(convertToRoman(1023)); // "MXXIII"
console.log(convertToRoman(2014)); // "MMXIV"
console.log(convertToRoman(3999)); // "MMMCMXCIX"
console.log(convertToRoman(4300)); // "Please enter a number less than or equal to 3999"
console.log(convertToRoman(-1)); // "Please enter a number greater than or equal to 1"
console.log(convertToRoman("hello")); // "Please enter a valid number"
