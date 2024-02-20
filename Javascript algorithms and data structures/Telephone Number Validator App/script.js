/**
 * @function checkPhoneUSnumber
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

const checkPhoneUSnumber = (phoneNumber) => {
  /**
   * @constant phonePattern
   * @description: A regular expression pattern that checks if a phone number is a valid US phone number.
   * @description: The pattern checks for the following:
   * 1. The phone number can start with 1- or not.
   * 2. The phone number must have 3 digits followed by a hyphen.
   * 3. The phone number must have another 3 digits followed by a hyphen.
   * 4. The phone number must have 4 digits.
   * @type {RegExp}
   * @example
   * phonePattern.test('555-555-5555') // returns true
   * phonePattern.test('1-555-555-5555') // returns true
   * phonePattern.test('5555-555-5555') // returns false
   * phonePattern.test('1-555-555-555') // returns false
   */

  const phonePattern = /^(1-)?\d{3}-\d{3}-\d{4}$/;

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

  if (checkPhoneUSnumber(phoneNumber)) {
    results.innerHTML += `
      <div>
            <span>Valid US phone number:</span><b>${phoneNumber}</b>

      </div>  
      `;
  } else {
    results.innerHTML = `
      <div>
            <span>Invalid US phone number:</span><b>${phoneNumber}</b>
      </div>
    `;
  }
};
