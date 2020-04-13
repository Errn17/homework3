//Global defined Variables
var generateBtn = document.querySelector("#generate");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; //defined upper case letters
var lowerCase = "abcdefghijklmnopqrstuvwxyz"; //defined lower case letters
var num = "0123456789"; //defined numbers
var sym = "!@#$%^&*(){}[];:<>/|_-+="; //defined symbols

//Prompt for user to decide how they want their password generated
var passLength = parseInt(prompt("Choose a password length between 8 and 128"));
if (passLength < 8 || passLength > 128) {
  //This will only run if the user does not choose a number between 8-128
  alert("You must choose a number between 8 and 128 to continue");
  // These will run as long as the user chooses a number between 8-128
} else {
  var confirmSym = confirm(
    "Would you like random Symbols included in your password?"
  );
  var confirmUpper = confirm(
    "Would you like random Uppercase letters included in your password?"
  );

  var confirmLower = confirm(
    "Would you like random Lowercase letters included in your password?"
  );

  var confirmNum = confirm(
    "Would you like random Numbers included in your password?"
  );

  var charSet = "";
}

// Write password to the #password input
function writePassword(generateBtn) {
  var password = generatePassword();
  for (var i = 0; i < passLength; i++) {
    password += charSet[Math.floor(Math.random() * charSet.length)];
  }
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  if (confirmSym) {
    charSet += sym;
  }

  if (confirmUpper) {
    charSet += upperCase;
  }

  if (confirmLower) {
    charSet += lowerCase;
  }

  if (confirmNum) {
    charSet += num;
  }

  if (charSet == "") {
    alert(
      "You must have atleast 1 symbol or 1 number in your password. Please try again to continue."
    );
    location.reload();
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
