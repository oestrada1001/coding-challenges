
const solution = (arr) => {
    // Type your solution here 
    let right = 0;
    let left = 0;
    
    //Remove root
    arr.shift();
    
    arr.forEach((v, k) => {
        // Is even
        if (k % 2 == 1) {
            right += v;
        } else {
            left += v;
        }
    });
    
    return left > right ? 'Left' : 'Right';
};

const arr = [1, 4, 100, 5];

console.log(solution(arr));