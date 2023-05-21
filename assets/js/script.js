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

    var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
    var uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numberCharacters = "0123456789";
    var specialCharacters = "!@#$%^&*()_+-=[]{}|:;\"<>,.?/~"

    if (options.hasSpecialCharacters) {
      possibleCharacters = possibleCharacters.concat(specialCharacters);
      guaranteedCharacters.push(getRandom(specialCharacters));
    }
    if (options.hasUppercaseCharacters) {
      possibleCharacters = possibleCharacters.concat(uppercaseCharacters);
      guaranteedCharacters.push(getRandom(uppercaseCharacters));
    }
    if (options.hasLowercaseCharacters) {
      possibleCharacters = possibleCharacters.concat(lowercaseCharacters);
      guaranteedCharacters.push(getRandom(lowercaseCharacters));
    }
    if (options.hasNumbers) {
      possibleCharacters = possibleCharacters.concat(numberCharacters);
      guaranteedCharacters.push(getRandom(numberCharacters)); 
    }

    for (var i = 0; i < options.length - guaranteedCharacters.length; i++) {
      var possibleCharacter = getRandom(possibleCharacters);
      result.push(possibleCharacter);
    }
  
    result = result.concat(guaranteedCharacters.split("")).sort(function () {
      return 0.5 - Math.random();
    });
    
      return result.join('');
      
  }
  
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  }
    generateBtn.addEventListener("click", writePassword);

  