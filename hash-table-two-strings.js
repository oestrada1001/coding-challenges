const s1 = 'hi';

const s2 = 'world';


function twoStrings(s1, s2) {
    // Write your code here
    const hash = {};
    let passed = false;
    for (let i = 0; i < s1.length; i++) {
        hash[s1[i]] = true;
    }
    
    for (let j = 0; j < s2.length; j++) {
        
        if (passed) {
            break;
        }
        
        if (hash.hasOwnProperty(s2[j])) {
            passed = true;
        }
    }
    
    return passed ? 'YES' : 'NO';   
}

const result = twoStrings(s1, s2);
console.log(result);