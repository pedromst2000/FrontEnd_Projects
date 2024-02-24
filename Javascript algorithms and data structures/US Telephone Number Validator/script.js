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

console.log(isValidPhoneUSnumber("555-555-5555"));
console.log(isValidPhoneUSnumber("1 555-555-5555"));
console.log(isValidPhoneUSnumber("1 (555) 555-5555"));
console.log(isValidPhoneUSnumber("5555555555"));
console.log(isValidPhoneUSnumber("555-555-5555"));
console.log(isValidPhoneUSnumber("(555)555-5555"));
console.log(isValidPhoneUSnumber("1(555)555-5555"));
console.log(isValidPhoneUSnumber("555-5555"));
console.log(isValidPhoneUSnumber("5555555"));
console.log(isValidPhoneUSnumber("1 555)555-5555"));
console.log(isValidPhoneUSnumber("1 555 555 5555"));
console.log(isValidPhoneUSnumber("1 456 789 4444"));
console.log(isValidPhoneUSnumber("123**&!!asdf#"));
console.log(isValidPhoneUSnumber("55555555"));
console.log(isValidPhoneUSnumber("(6054756961)"));
console.log(isValidPhoneUSnumber("2 (757) 622-7382"));
console.log(isValidPhoneUSnumber("0 (757) 622-7382"));
console.log(isValidPhoneUSnumber("-1 (757) 622-7382"));
console.log(isValidPhoneUSnumber("2 757 622-7382"));
console.log(isValidPhoneUSnumber("10 (757) 622-7382"));
console.log(isValidPhoneUSnumber("27576227382"));
console.log(isValidPhoneUSnumber("(275)76227382"));
console.log(isValidPhoneUSnumber("2(757)6227382"));
console.log(isValidPhoneUSnumber("2(757)622-7382"));
console.log(isValidPhoneUSnumber("555)-555-5555"));
console.log(isValidPhoneUSnumber("(555-555-5555"));
console.log(isValidPhoneUSnumber("(555)5(55?)-5555"));
console.log(isValidPhoneUSnumber("55 55-55-555-5"));
console.log(isValidPhoneUSnumber("11 555-555-5555"));
