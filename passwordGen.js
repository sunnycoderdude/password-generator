

// Length
var passLength = 80;

// Password Attributes

    // Special Characters
    var specialChar = false;
    var specialCharString = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

    // Numeric Characters
    var numericChar = false;
    var numericCharString = "0123456789";

    // console.log(numericCharString[Math.floor(Math.random() * 9)]);

    // Lower Case Characters
    var lowerChar = true;
    var lowerCharString = "abcdefghijklmnopqrstuvwxyz";

    // console.log(lowerCharString[Math.floor(Math.random() * 25)]);

    var upperChar = true;
    var upperCharString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

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