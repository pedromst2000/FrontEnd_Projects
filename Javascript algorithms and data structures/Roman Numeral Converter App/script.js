/**
 * Convert the given number into a roman numeral.
 * @param {number} num - The number to convert.
 * @returns {string} - The converted number.
 */

const convertToRoman = (num) => {
  const romanNumeral = {
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
  };

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

    for (let key in romanNumeral) {
      while (num >= romanNumeral[key]) {
        result += key;
        num -= romanNumeral[key];
      }
    }

    return result;
  } catch (error) {
    console.log(error.message);
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
