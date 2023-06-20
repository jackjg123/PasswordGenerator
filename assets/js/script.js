// selects the button element
var generateBtn = document.querySelector('#generate');
// Guides the user through the password criteria.
function getPasswordCriteria() {
  // use method parseInt() with a value of 10 using the radix parameter of ten
  // radix of 10 doesn't return letters or whitespace.
  var length = parseInt(
    prompt('How many characters do you would you like to generate?'),
    10
  );
  // checks to make sure the length value is a number between 8 and 128.
  // Returns null if length is below 8 or above 128.
  if (length < 8 || length > 128) {
    alert('Please enter a number between 8 and 128');
    // reloads page after prompt
    return null;
  }
  // prompts the user to enter a only numbers and returns null if length is not a number.
  // sets the constructor parameter
  if (Number.isNaN(length)) {
    alert('The length of your password must be a number.');
    // reloads page after prompt
    return null;
  }
  // sets the value of the variable to get the user's chosen password criteria.
  var hasSpecialCharacters = confirm('Click ok to include special characters');
  var hasUpperCaseCharacters = confirm(
    'Click ok to include upper case characters'
  );
  var hasLowerCaseCharacters = confirm(
    'Click ok to include lower case characters'
  );
  var hasNumbers = confirm('Click ok to include numbers');
  // set the variables to be the properties of the passwordCriteria.
  var passwordCriteria = {
    length: length,
    hasSpecialCharacters: hasSpecialCharacters,
    hasUpperCaseCharacters: hasUpperCaseCharacters,
    hasLowerCaseCharacters: hasLowerCaseCharacters,
    hasNumbers: hasNumbers,
  };
  console.log(passwordCriteria);
  return passwordCriteria;
}

function randomCharacter(arr) {
  //Math.random() function calculates a random number between 0 and 1, and it is multiplied by the number given by the array length. The Math.floor() function then rounds that value down to the nearest integer.
  var randomIndex = Math.floor(Math.random() * arr.length);
  // allows the selection of a random element from an array based one the randomly generated index value
  var randomElement = arr[randomIndex];

  return randomElement;
}

function generatePassword() {
  //assigns the users returned value of the password criteria to options variable
  var options = getPasswordCriteria();
  //declares arrays and stores the values for possible, guaranteed, and the results.
  var results = [];
  var possibleCharacter = [];
  // guarantees one value for each option chosen by the user
  var guaranteedCharacters = [];

  if (!options) return null;
  //all possible characters are set in a string. note the \\ allows a single backslash in the string
  var specialCharacters = '!@#$%^&*()_+-=[]{}|:;\\"<>,.?/~';
  console.log(specialCharacters);
  var upperCaseCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  console.log(upperCaseCharacters);
  var lowerCaseCharacters = 'abcdefghijklmnopqrstuvwxyz';
  console.log(lowerCaseCharacters);
  var numberCharacters = '0123456789';
  console.log(numberCharacters);
  // Checks each option to see which were selected.
  if (options.hasSpecialCharacters) {
    //combines possibleCharacters array with specialCharacters string.
    possibleCharacter = possibleCharacter.concat(specialCharacters);
    //inside the push method the the specialCharacters array runs through the randomCharacters function.
    //the push method pushes the result to the guaranteedCharacters array.
    guaranteedCharacters.push(randomCharacter(specialCharacters.split('')));
  }
  if (options.hasUpperCaseCharacters) {
    possibleCharacter = possibleCharacter.concat(upperCaseCharacters);
    guaranteedCharacters.push(randomCharacter(upperCaseCharacters.split('')));
  }
  if (options.hasLowerCaseCharacters) {
    possibleCharacter = possibleCharacter.concat(lowerCaseCharacters);
    guaranteedCharacters.push(randomCharacter(lowerCaseCharacters.split('')));
  }
  if (options.hasNumbers) {
    possibleCharacter = possibleCharacter.concat(numberCharacters);
    guaranteedCharacters.push(randomCharacter(numberCharacters.split('')));
  }
  console.log(guaranteedCharacters);
  //
  for (var i = 0; i < options.length - guaranteedCharacters.length; i++) {
    var possibleCharacter = randomCharacter(possibleCharacter);
    results.push(possibleCharacter);
  }
  results = results.concat(guaranteedCharacters).sort(function () {
    return 0.5 - Math.random();
  });

  return results.join('');
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}
generateBtn.addEventListener('click', writePassword);
