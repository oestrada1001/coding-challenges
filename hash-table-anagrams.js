const s = 'kkkk';

function sherlockAndAnagrams(s) {
    // Write your code here

    const anagramsArray = getAnagrams(s);
    console.log(anagramsArray);
    let sortedAnagramArray = [];
    anagramsArray.forEach(v => {
        const sortedValue = v.split('').sort().join('');
        sortedAnagramArray.push(sortedValue);
    });
    console.log(sortedAnagramArray);


    const map = {};
    sortedAnagramArray.forEach(v => {
        if (map.hasOwnProperty(v)) {
            map[v] += 1;
        } else {
            map[v] = 1;
        }
    });
    console.log(map);


    let anagramCount = 0;
    for(const [key, value] of Object.entries(map)) {
        if (value > 1) {
            anagramCount += value;
        }
    }

    return anagramCount;
}


function getAnagrams(s) {
    let i, j, result = [];

    for (i = 0; i < s.length; i++) {
        for (j = i + 1; j < s.length + 1; j++) {
          result.push(s.slice(i, j))
        }
      }
      return result
}

const result = sherlockAndAnagrams(s);

console.log(result);