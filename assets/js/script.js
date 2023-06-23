var generateBtn = document.querySelector('#generate');

console.log(generateBtn);

// prompts the user for password Criteria
function getPasswordCriteria() {
  var length = parseInt(
    prompt('How many characters do you would you like to generate?'),

    10
  );

  console.log(length);

  // Validates the password length chosen by user
  if (length < 8 || length > 128) {
    alert('Please enter a number between 8 and 128');

    console.log('Please enter a number between 8 and 128');

    return null;
  }

  if (Number.isNaN(length)) {
    alert('The length of your password must be a number.');

    console.log('The length of your password must be a number.');

    return null;
  }

  var hasSpecialCharacters = confirm('Click ok to include special characters');

  console.log('User selected to include special characters');

  var hasUpperCaseCharacters = confirm(
    'Click ok to include upper case characters.'
  );

  console.log('User selected to include upper case characters.');

  var hasLowerCaseCharacters = confirm(
    'Click ok to include lower case characters'
  );
  console.log('User selected to include lower case characters');

  var hasNumbers = confirm('Click ok to include numbers');

  console.log('User selected to include numbers');

  //Create a new object setting the password criteria.
  var passwordCriteria = {
    length: length,

    hasSpecialCharacters: hasSpecialCharacters,

    hasUpperCaseCharacters: hasUpperCaseCharacters,

    hasLowerCaseCharacters: hasLowerCaseCharacters,

    hasNumbers: hasNumbers,
  };
  console.log(passwordCriteria.length);

  return passwordCriteria;
}

//generates random character
function randomCharacter(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);

  var randomElement = arr[randomIndex];

  return randomElement;
}

//declare objects to empty arrays
function generatePassword() {
  var options = getPasswordCriteria();

  var results = [];

  var possibleCharacter = [];

  var guaranteedCharacters = [];

  if (!options) return null;

  //set the string with all the characters corresponding to the each passwordCriteria
  var specialCharacters = '"!@#$%^&*()_+-=[]{}|:;\\"<>,.?/~'.split('');

  console.log(specialCharacters);

  var upperCaseCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  console.log(upperCaseCharacters);

  var lowerCaseCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('');

  console.log(lowerCaseCharacters);

  var numberCharacters = '0123456789'.split('');

  console.log(numberCharacters);

  // set a guaranteed character for each selected Criteria
  // include special characters
  if (options.hasSpecialCharacters) {
    possibleCharacter = possibleCharacter.concat(specialCharacters);

    console.log(possibleCharacter);

    guaranteedCharacters.push(randomCharacter(specialCharacters));

    console.log(guaranteedCharacters);
  }

  // include uppercase
  if (options.hasUpperCaseCharacters) {
    possibleCharacter = possibleCharacter.concat(upperCaseCharacters);

    console.log(possibleCharacter);

    guaranteedCharacters.push(randomCharacter(upperCaseCharacters));

    console.log(guaranteedCharacters);
  }

  //include lowercase
  if (options.hasLowerCaseCharacters) {
    possibleCharacter = possibleCharacter.concat(lowerCaseCharacters);

    console.log(possibleCharacter);

    guaranteedCharacters.push(randomCharacter(lowerCaseCharacters));

    console.log(guaranteedCharacters);
  }

  //include numbers
  if (options.hasNumbers) {
    possibleCharacter = possibleCharacter.concat(numberCharacters);

    console.log(possibleCharacter);

    guaranteedCharacters.push(randomCharacter(numberCharacters));

    console.log(guaranteedCharacters);
  }

  // get random possible characters until password length is met. (after guaranteed characters are set)
  while (results.length < options.length - guaranteedCharacters.length) {
    var randomChar = randomCharacter(possibleCharacter);
    console.log(
      '🚀 ~ file: script.js:143 ~ generatePassword ~ randomChar:',
      randomChar
    );
    if (!results.includes(possibleCharacter)) {
      results.push(randomChar);
    }
  }

  // combines the random results with with guaranteed characters.
  var passwordArray = guaranteedCharacters.concat(results);
  var password = passwordArray.join('');
  return password;
}

// checks if password meets criteria. Displays the password.
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
  console.log(
    '🚀 ~ file: script.js:156 ~ writePassword ~ passwordText.value:',
    passwordText.value
  );
  if (passwordText.value !== password) console.log('Fail');
  else console.log('Here is your new password!');
}

// clicking button initiates the code.
generateBtn.addEventListener('click', writePassword);
