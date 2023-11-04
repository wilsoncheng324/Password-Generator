// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  var numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var uppercaseList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  var specialCharList = ['+', '-', '*', '/', '%', '=', '>', '<', '!', '&', '|', '?', ':', ';', ',', '.'];
  var userChoice = [];

  alert("Please choose the criteria for your password.");
  var length = prompt("Choose the length of your password, please input 8 to 128 characters: ");
  var num = confirm("Would you like a numeric in your password?");
  var lowercase = confirm("Would you like a lowercase Alphabet in your password?");
  var uppercase = confirm("Would you like a uppercase Alphabet in your password?");
  var specialChar = confirm("Would you like a special Character in your password?");
  var passcode = "";

  if (length < 8 || length > 128){
    alert("Invalid input, please enter the number between 8 and 128.")
    return passcode = "";
  }

  if (num === true) {
    userChoice = userChoice.concat(numberList)
  }
  if (lowercase === true){
    userChoice = userChoice.concat(lowercaseList)
  }
  if (uppercase === true){
    userChoice = userChoice.concat(uppercaseList)
  }
  if (specialChar === true){
    userChoice = userChoice.concat(specialCharList)
  }

  for (var i = 0; i < length; i++){
    var randomIndex = Math.floor(Math.random() * userChoice.length);
    passcode += userChoice[randomIndex];
  }

  return passcode;
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
