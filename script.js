var generateBtn = document.querySelector("#generate");

var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('')
var lowercase = "abcdefghijklmnopqrstuvwxyz".split('')
var special = "!@#$%^&*()_+{}[];'<,>./?:`~".split('')
var numbers = "0123456789".split('')

function generatePassword() {
  var passwordLength = prompt("How long would you like your password to be? (8-128)")
  if(passwordLength < 8 || passwordLength > 128) {
    alert("Your password must have a length of between 8 and 128. Please retry!")
  }

}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);
