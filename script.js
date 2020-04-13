//Global defined Variables

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

// The if statements will run based off the user input from the prompts at the start then it will run accordingly. and the for loop will run and display the random characters based off the user input for the length of the password.
function writePassword() {
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

  var passwordText = document.querySelector("#password").value;

  var password = "";

  passwordText.value = password;

  //this loop will create the random password based off the data from the if statements above. It will then store it until its called upon

  for (var i = 0; i < passLength; i++) {
    password += charSet[Math.floor(Math.random() * charSet.length)];
  }
  document.querySelector("#password").value = password;
}

// Add event listener to generate button

var generateBtn = document.querySelector("#generate");
//this will call the whole function generating the random password for the user
generateBtn.addEventListener("click", writePassword);
