

// Prompt the User for a Password Length
var passLengthString = prompt("Choose a password length between 8 and 128 characters long!");
var passLength = parseInt(passLengthString);
console.log(passLength);


if (passLength < 8 || passLength > 128) {
    passLengthString = prompt("Choose a password length between 8 and 128 characters long!");
    passLength = parseInt(passLengthString);
} else {
    passLength = passLength;
}

// Password Attributes

    // Special Characters
    var specialChar = confirm("Do you want special characters?");
    var specialCharString = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
    console.log(specialChar);

    // Numeric Characters
    var numericChar = confirm("Do you want numbers?");
    var numericCharString = "0123456789";
    console.log(numericChar);

    // console.log(numericCharString[Math.floor(Math.random() * 9)]);

    // Lower Case Characters
    var lowerChar = confirm("Do you want lower case characters?");
    var lowerCharString = "abcdefghijklmnopqrstuvwxyz";
    console.log(lowerChar);

    // console.log(lowerCharString[Math.floor(Math.random() * 25)]);

    var upperChar = confirm("Do you want upper case characters?");
    var upperCharString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    console.log(upperChar);

// String from which we pick password
var passwordBucket = "";

// Password String
var password = "";

// Build string from which we pick password characters
if (specialChar === true) {
    passwordBucket = passwordBucket + specialCharString;
}
if (numericChar === true) {
    passwordBucket = passwordBucket + numericCharString;
}
if (lowerChar === true) {
    passwordBucket = passwordBucket + lowerCharString;
}
if (upperChar === true) {
    passwordBucket = passwordBucket + upperCharString;
}

bucketLength = passwordBucket.length - 1;

for (let i = 0; i < passLength; i++) {
    password = password + passwordBucket[Math.floor(Math.random() * bucketLength)];
}

console.log(password);