/**
 * ------------------------ Decode a Message ------------------------
 * A message has been encoded as a text stream that is to be read character by character. 
 * The stream contains a series of comma-delimited integers, each a positive number
 * capable of being represented by a C++ int. However, the character represented by
 * a particular integer depends on the current decoding mode. There are three modes:
 * uppercase, lowercase, and punctuation.
 * 
 * In uppercase mode, each integer represents an uppercase letter: The integer
 * modulo 27 indicates the letter of the alphabet (where 1 = A and so on). So an input
 * value of 143 in uppercase mode would yield the letter H because 143 modulo 27 is
 * 8 and H is the eighth letter in the alphabet.
 * 
 * The lowercase mode works the same but with lowercase letters; the remainder of
 * dividing the integer by 27 represents the lowercase letter (1 = a and so on). So an
 * input value of 56 in lowercase mode would yield the letter b because 57 modulo 27
 * is 2 and b is the second letter in the alphabet.
 * 
 * In punctuation mode, the integer is instead considered modulo 9, with the interpretation given by Table 2-3 below. 
 * So 19 would yield an exclamation point because 19 modulo 9 is 1.
 * 
 * At the beginning of each message, the decoding mode is uppercase letters. Each
 * time the modulo operation (by 27 or 9, depending on mode) results in 0, the decoding mode switches. If the current mode is uppercase, the mode switches to lowercase
 * letters. If the current mode is lowercase, the mode switches to punctuation, and if it is
 * punctuation, it switches back to uppercase.
 * 
 */

determineAlphabetIndex = (value) => {
    alphabetModulo = 27;
    return value % alphabetModulo;
}

decodeNumber = (type, number) => {

    let decodedSymbol = '';
    if (type == 'u') {

        const uppercaseAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        decodedSymbol = uppercaseAlphabet[determineAlphabetIndex(number - 1)];

    } else if (type == 'l') {
        const lowercaseAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".toLowerCase();
        decodedSymbol = lowercaseAlphabet[determineAlphabetIndex(number - 1)];

    } else if (type == 'p') {

        const punctuationIndex = "!?,. :\"'";
        decodedSymbol = punctuationIndex[(number % 9) - 1];
        
    }
    return decodedSymbol;
}

let state = {
    algo: 'u',
    message: ''
}

updateState = (state) => {
    if (state.algo == 'u') {
        state.algo = 'l';
    } else if (state.algo == 'l') {
        state.algo = 'p';
    } else if (state.algo == 'p') {
        state.algo = 'u';
    }
    return state;
}

const originalInput = "18,12312,171,763,98423,1208,216,11,500,18,241,0,32,20620,27,10";
const messageArray = originalInput.split(",");

for (let i = 0; i < messageArray.length; i++) {
    if (state.algo == 'u' || state.algo == 'l') {
        if (determineAlphabetIndex(messageArray[i]) == 0 ) {
            state = updateState(state);
        } else {
            state.message += decodeNumber(state.algo, messageArray[i]);
        }
    } else if (state.algo == 'p') {
        if (messageArray[i] % 9 == 0) {
            state = updateState(state);
        } else {
            state.message += decodeNumber(state.algo, messageArray[i]);
        }
        
    }
}

console.log(state.message); // Right? Yes!