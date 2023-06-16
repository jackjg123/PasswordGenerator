// selects the button element
var generateBtn = document.querySelector("#generate");
// Guides the user through the password criteria.
function getPasswordCriteria() {
  // use method parseInt() with a value of 10 using the radix parameter of ten
  // radix of 10 doesn't return letters or whitespace.
  var length = parseInt(
    prompt("How many characters do you want to generate?"), 10
  );
  // checks to make sure the length value is a number between 8 and 128.
  // Returns null if length is below 8 or above 128.
  if (length < 8 || length > 128) {
    alert("Please enter a number between 8 and 128");
    return null;
  }
  // prompts the user to enter a only numbers and returns null if length is not a number.
  // sets the constructor parameter
  if (Number.isNaN(length)) {
    alert("The length of your password must be a number.");
    return null;
  }
  // sets the value of the variable to get the user's chosen password criteria.
  var specialCharacters = confirm("Click ok to include special characters");
  var upperCaseCharacters = confirm("Click ok to include upper case characters");
  var lowerCaseCharacters = confirm("Click ok to include lower case characters");
  var hasNumbers = confirm("click ok to include numbers");

  var passwordCriteria = {
    length: length,
    specialCharacters: specialCharacters,
    upperCaseCharacters: upperCaseCharacters,
    lowerCaseCharacters: lowerCaseCharacters,
    hasNumbers: hasNumbers,
  }
  return passwordCriteria;
}

