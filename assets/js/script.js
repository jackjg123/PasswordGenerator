// selects the button element
var generateBtn = document.querySelector("#generate");
// Guides the user through the password criteria.
function getPasswordCriteria(){
  // use method parseInt() with a value of 10 using the radix parameter of ten
  // radix of 10 doesn't return letters or whitespace.
  var length = parseInt(
    prompt("How many characters do you would you like to generate?"), 10
  );
  // checks to make sure the length value is a number between 8 and 128.
  // Returns null if length is below 8 or above 128.
  if (length < 8 || length > 128) {
    alert("Please enter a number between 8 and 128");
    // reloads page after prompt
    location.reload();
    return null;
  }
  // prompts the user to enter a only numbers and returns null if length is not a number.
  // sets the constructor parameter
  if (Number.isNaN(length)) {
    alert("The length of your password must be a number.");
    // reloads page after prompt
    location.reload();
    return null;
  }
  // sets the value of the variable to get the user's chosen password criteria.
  var specialCharacters = confirm("Click ok to include special characters");
  var upperCaseCharacters = confirm("Click ok to include upper case characters");
  var lowerCaseCharacters = confirm("Click ok to include lower case characters");
  var hasNumbers = confirm("Click ok to include numbers");
  // set the variables to be the properties of the passwordCriteria.
  var passwordCriteria = {
    length: length,
    specialCharacters: specialCharacters,
    upperCaseCharacters: upperCaseCharacters,
    lowerCaseCharacters: lowerCaseCharacters,
    hasNumbers: hasNumbers,
  };
  return passwordCriteria;
}

generateBtn.addEventListener("click", getPasswordCriteria)

function randomCharacter (arr) {
  //Math.random() function calculates a random number between 0 and 1, and it is multiplied by the number given by the array length. The Math.floor() function then rounds that value down to the nearest integer.
  var randomIndex = Math.floor(Math.random() * arr.length);
  // allows the selection of a random element from an array based one the randomly generated index value
  var randomElement = arr[randomIndex];
  
  return randomElement;
}


