/**
 * Problem: Luhn Checksum Validation
 * 
 * The Luhn formula is a widely used system for validating identification numbers. 
 * Using the original number, double the value of every other digit. 
 * Then add the values of the individual digits together (if a doubled value now has two digits, add the digits individually).
 * The identification number is valid if the sum is divisible by 10.
 * 
 * Write a program that takes an identification  number of arbitrary length and determines whether the number is valid under the Luhn formula.
 * The program must process each character before reading the next one.
 */

function luhnChecksumValidation(userInput) {
    userInputString = userInput.toString();

    stringLength = userInputString.length;
    
    let checkSum = 0;
    for (let i = 0; i < stringLength; i++) {
    
        let num = parseInt(userInputString[i]);
        if (i % 2 != 0) {
            num *= 2;
            if(num > 10) {
                num = 1 + parseInt(num.toString()[1]);
            }
        }
        checkSum += num;
    }
    return checkSum % 10 == 0 ? 'Valid' : 'Invalid';
}

// Valid
const userInput = 1762483;
// Invalid
//const userInput = 176248;
console.log(luhnChecksumValidation(userInput));