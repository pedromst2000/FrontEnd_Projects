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
  // the phone patthern can starts with 1 -eg: 1-555-555-5555 or not -eg: 555-555-5555
  const phonePattern = /^(1-)?\d{3}-\d{3}-\d{4}$/;

  return phonePattern.test(phoneNumber);
};

console.log(checkPhoneUSnumber("555-555-5555")); // returns true
console.log(checkPhoneUSnumber("1-555-555-5555")); // returns true
console.log(checkPhoneUSnumber("5555-555-5555")); // returns false
console.log(checkPhoneUSnumber("1-555-555-555")); // returns false
console.log(checkPhoneUSnumber("1-555-555-55555")); // returns false
