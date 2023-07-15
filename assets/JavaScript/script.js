// Assignment Code
var generateBtn = document.querySelector("#generate");



function generatePassword(){
  //Gets password length
 var pwLength = window.prompt('Password Length Needed (8-128): ');
//  Make sure length is between 8 and 128
    if (pwLength<8 || pwLength>128){
      alert('Your passward length must be between 8 and 128. Please re-enter number');
      generatePassword();
    }

// Get the rest of the password criteria as booleans
 var lowerCase = confirm('Does this password need lowercase letters?');
 var upperCase = confirm('Does this password need uppercase letters?');
 var specChar = confirm('Does this password need a special character?');
 var num = confirm('Does this password need a number?');

// This function is returned when the parent function gets ran.
function pwcreation(lowerCase,upperCase,specChar,num) {
  var pwstring = '';
  var i = 0 ;

  do { 
    // Pulls a lowercase letter into the string if user selected it as a criteria
    if (lowerCase){
      pwstring = pwstring.concat(String.fromCharCode(Math.floor(Math.random()*(122-97)+97)));
      i=i+1;
    }
    // Pulls an uppercase letter into the string if user selected it as a criteria
    if(upperCase){
      pwstring = pwstring.concat(String.fromCharCode(Math.floor(Math.random()*(90-65)+65)));
      i=i+1;
    }
    // Pulls a special character letter into the string if user selected it as a criteria
    if(specChar){
     var charSet = ' !"#$%&()*+,-./:;<=>?@[\]^_`{|}~';
     pwstring = pwstring.concat( charSet[Math.floor(Math.random()*(31-0)+0)]);
      i=i+1;
    }
    // Pulls a number into the string if user selected it as a criteria
    if(num){
      pwstring = pwstring.concat(Math.floor(Math.random()*(9-0)+0));
      i=i+1;
    }
    // This cycle will only happen for the specified length of the password.
  } while (i<pwLength); 
return pwstring;
}

return pwcreation(lowerCase,upperCase,specChar,num) ;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

 
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
