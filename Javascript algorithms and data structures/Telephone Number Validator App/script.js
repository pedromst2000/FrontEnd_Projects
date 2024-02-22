/**
 * @function isValidPhoneUSnumber
 * @description: A function that checks if a phone number is a valid US phone number.
 * @param {string} phoneNumber - The phone number to be checked.
 * @returns {boolean} - Returns true if the phone number is a valid US phone number, otherwise returns false.
 * @example
 * checkPhoneUSnumber('555-555-5555') // returns true
 * checkPhoneUSnumber('1-555-555-5555') // returns true
 * checkPhoneUSnumber('5555-555-5555') // returns false
 * checkPhoneUSnumber('1-555-555-555') // returns false
 * checkPhoneUSnumber('1-555-555-55555') // returns false
 */

const isValidPhoneUSnumber = (phoneNumber) => {
  /**
   * @constant phonePattern
   * @description: A regular expression pattern that checks if a phone number is a valid US phone number.
   * @description: The pattern checks for the following:
   * 1. The phone number can start with 1 followed by an optional space.
   * 2. The phone number can have an optional area code in the format (555) or 555.
   * 3. The phone number can have an optional space or dash separator.
   * @type {RegExp}
   * @see:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
   */

  const phonePattern = /^(1\s?)?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;

  return phonePattern.test(phoneNumber);
};

document.getElementById("phone-form").onsubmit = (e) => {
  const phoneNumber = document.getElementById("user-input").value;
  const results = document.getElementById("results-div");

  e.preventDefault();

  if (phoneNumber === "") {
    alert("Please provide a phone number");
    return;
  }

  if (isValidPhoneUSnumber(phoneNumber)) {
    // clearing the input field
    document.getElementById("user-input").value = "";
    results.innerHTML += `
           Valid US number:  <b>${phoneNumber}</b>
      `;
    results.style.color = "green";
  } else {
    document.getElementById("user-input").value = "";
    results.innerHTML += `
            Invalid US number:  <b>${phoneNumber}</b>
    `;
    results.style.color = "red";
  }
};

document.getElementById("clear-btn").onclick = () => {
  document.getElementById("results-div").innerHTML = "";
};
