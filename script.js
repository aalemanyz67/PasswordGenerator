// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//var numArray = ["A, B, C, D, E, F, G, H, I, J, K, L, M, P, Q, R, S, T, U, V, W XY Z, 1,2, 3, 4, 5, 6, 7, 8, 9, 10, !, @, #, $, %< ^, &, *, (, ), -, _, +, ="];
var numArray = ["1","2","3","4","5","6","7","8","9","10"];
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var special = ["!","@","#","$","%","^","&","*","(",")"];

window.alert("Click Generate Password Button to make a New Password");
function generatePassword() {
  console.log("button works");


  var passwordLength = window.prompt("How long do you want the password to be?")


  if (passwordLength > 128) {
    window.alert("Password to long, try again!");
    return;
  } else {
    console.log("correct length")
  }
  if (passwordLength < 8) {
    window.alert("Password is to short, try again!")
    return "try again"
  }
  var specialCharacters = window.confirm("Do you want to use special characters?")
  var lowercaseCharacters = window.confirm("Do you want to use lowercase characters?")
  var uppercaseCharacters = window.confirm("Do you want to use uppercase characters?")
  var numericCharacters = window.confirm("Do you want to use number characters?")
  console.log(passwordLength, specialCharacters, lowercaseCharacters, uppercaseCharacters, numericCharacters);
var randomPassword = ""
  //special characters, numbers, and letters need to have their own array.
  for (var i = 0; i < passwordLength ; i++) {
    var index = Math.floor(Math.random() * numArray.length)
    var randomCharacter = numArray[index]
    randomPassword = randomCharacter + randomPassword;
    
  }
  for (var i = 0; i < passwordLength ; i++) {
    var index = Math.floor(Math.random() * uppercase.length)
    var randomCharacter = uppercase[index]
    randomPassword = randomCharacter + randomPassword;
  }
  for (var i = 0; i < passwordLength ; i++) {
   var index = Math.floor(Math.random() * lowercase.length)
    var randomCharacter = lowercase[index]
    randomPassword = randomCharacter + randomPassword;
  }

  for (var i = 0; i < passwordLength ; i++) {
    var index = Math.floor(Math.random() * special.length)
    var randomCharacter = special[index]
    randomPassword = randomCharacter + randomPassword;

  }
  
return randomPassword
}

//window.prompt = var index = Math.floor(Math.random() * numberArray.length);

//window.alert(" Your new password must be at least 8 characters long and include special characters.")

//var numberArray = ["A, B, C, D, E, F, G, H, I, J, K, L, M, P, Q, R, S, T, U, V, W XY Z, 1,2, 3, 4, 5, 6, 7, 8, 9, 10, !, @, #, $, %< ^, &, *, (, ), -, _, +, ="];
//var letters = 0;
//var numbers = 0;
//var specialCharacters = 0;





//var index = Math.floor(Math.random() * numberArray.length);




//Number of prompts:
//1. length of password criteria
//2. Character types 
//3. password criteria


//Number of Confirms
//1.Confirm wether or not to include lowercase,uppercase, numeric, and/or special characters.

//Number of Alerts:
//1. alert gives generated password.


