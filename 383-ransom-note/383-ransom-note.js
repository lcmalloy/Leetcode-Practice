/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
        let result = true;
    const rNoteArray = ransomNote.split('');
    const magazineArray = magazine.split('');
    let rNoteObject = {};
    let magazineObject = {};

    for (let i = 0; i < rNoteArray.length; i++) {
        if (!rNoteObject[rNoteArray[i]]) {
            rNoteObject[rNoteArray[i]] = 1;
        } else {
            rNoteObject[rNoteArray[i]] += 1;
        }
    }
    for (let j = 0; j < magazineArray.length; j++) {
        if (!magazineObject[magazineArray[j]]) {
            magazineObject[magazineArray[j]] = 1;
        } else {
            magazineObject[magazineArray[j]] += 1;
        }
    }

    for (let key in rNoteObject) {
        if (rNoteObject[key] > magazineObject[key] || !magazineObject[key]) {
            result = false;
        }
    }
    return result;
};