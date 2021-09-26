const magazine = [ 'two','times','three','is','not','four' ];
const note = [ 'two','times','two','is','four' ];

function checkMagazine(magazine, note) {
    // Write your code here

    // create both into maps;
    const noteObj = {};
    note.forEach(v => {
        if (noteObj.hasOwnProperty(v)) {
            noteObj[v] += 1;
        } else {
            noteObj[v] = 1;
        }
    });

    const magObj = {};
    magazine.forEach(v => {
        if (magObj.hasOwnProperty(v)) {
            magObj[v] += 1;
        } else {
            magObj[v] = 1;
        }
    });

    let passed = true;


    console.log('Note: ', noteObj);
    console.log('Mag: ', magObj);

    for(let [key, value] of Object.entries(noteObj)) {
        if (magObj.hasOwnProperty(key) && magObj[key] < noteObj[key]) {
            passed = false;
        }
    }

    console.log(passed ? 'Yes': 'No');
}

checkMagazine(magazine, note);