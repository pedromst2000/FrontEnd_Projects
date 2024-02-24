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

document.getElementById("roman-form").onsubmit = (e) => {
  e.preventDefault();
  const num = document.getElementById("number").value;
  const output = document.getElementById("output");

  // get the error message
  const errorMessage = convertToRoman(num);

  if (
    errorMessage === "Please enter a valid number" ||
    errorMessage === "Please enter a number greater than or equal to 1" ||
    errorMessage === "Please enter a number less than or equal to 3999"
  ) {
    output.innerHTML = errorMessage;
    output.style.opacity = 1;
    output.style.backgroundColor = "#ff4d4d";
    output.animate([{ opacity: 0 }, { opacity: 1 }], {
      // timing options
      duration: 550,
    });

    setTimeout(() => {
      output.style.opacity = 0;
      output.animate([{ opacity: 1 }, { opacity: 0 }], {
        duration: 550,
      });
    }, 2500);
  } else {
    output.innerHTML = convertToRoman(num);
    output.style.opacity = 1;
    output.style.backgroundColor = "rgb(113, 116, 144)";
    output.animate([{ opacity: 0 }, { opacity: 1 }], {
      duration: 550,
    });

    setTimeout(() => {
      output.style.opacity = 0;
      output.animate([{ opacity: 1 }, { opacity: 0 }], {
        duration: 550,
      });
    }, 5000);
  }
};
