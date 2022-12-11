// Assignment Code

var generateBtn = document.querySelector("#generate");

function generatePassword() {

var uppercaseConf = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseConf = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbersConf =      ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var characterConf = ["&", "*", "(", ")", "-", "_","@", "#", "$", "%", "^", "=", "+"];

// Results and user Confirmation
 
var resultConf = [];
var userConf = [];

// Password Prompts

uppercaseConf [1] 

  var numCharacter = prompt ("How many characters do you want your password to be? - between 8 and 128 ?");

  var numbers = confirm     ("Do you want to use numbers in your password?");

  var uppercases = confirm  ("Do you want to use Uppercases in your password?");

  var lowercases = confirm  ("Do you want to use lowercases in your password?");

  var characters = confirm  ("Do you want to use special characters in your password?");

if (numbers){
  resultConf = resultConf.const(numbersConf);
  
}

if (uppercases){
  resultConf = resultConf.const(uppercaseConf);

}

if (lowercases){
  resultConf = resultConf.const(lowercaseConf);

}

if (characters){
  resultConf = resultConf.const(characterConf);
}
console.log(resultConf)


for (var i = 0; i < numCharacter; i++) {
      
  userConf.push (resultConf[Math.floor(Math.random() * resultConf.length)]); 
  }

  return userConf.join("") ;
}

// Password Function 

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}


// Event listener to generate button
generateBtn.addEventListener("click", writePassword);
