var generateBtn = document.querySelector("#generate");

function getPasswordOptions() {

  var length = parseInt(
    prompt("How many characters would you like your password to be?"),
    10
  );
    if (length < 8 || length > 128) {
      alert('Password length must be between 8 and 128 characters');
            return null;
          }
  if (Number.isNaN(length)) {
    alert('Password length must be provided as a number');
  return null;
  }
  var hasSpecialCharacters = confirm(
      "Click ok to include special characters"
    );
  var hasUppercaseCharacters = confirm(
    "Click ok to include uppercase characters"
  );
  var hasLowercaseCharacters = confirm(
      "Click ok to include lowercase characters"
    );
   var hasNumbers = confirm(
    "Click ok to include numbers"
   ) 
    var passwordOptions = {
      length: length, 
      hasSpecialCharacters: hasSpecialCharacters,
      hasUppercaseCharacters: hasUppercaseCharacters,
      hasLowercaseCharacters: hasLowercaseCharacters,
      hasNumbers: hasNumbers,
    };

    return passwordOptions;
  }

  function getRandom(arr) {
    var randIndex = Math.floor(Math.random() * arr.length);
    var randElement = arr[randIndex];
  
    return randElement;
  }

  function generatePassword() {

    var options = getPasswordOptions();
    var result = [];
    var possibleCharacters = [];
    var guaranteedCharacters = [];

    if (!options) return null;

    if (options.hasSpecialCharacters) {
      possibleCharacters = possibleCharacters.concat(specialCharacters);
      guaranteedCharacters.push(getRandom(specialCharacters));
    }
    return result.join('');
  }
  
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  }
    generateBtn.addEventListener("click", writePassword);

  