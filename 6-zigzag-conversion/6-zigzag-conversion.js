/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1) {
        return s;
    }
    let forward = true;
    let result = [];
    let counter = 1;
    for (let i = 0; i < numRows; i++) {
        result.push('');
    }
    //['', '', '']
    for (let i = 0; i < s.length; i++) {
        result[counter-1] += s[i];
        if (counter === numRows) {
            forward = false;
        } else if (counter === 1) {
            forward = true;
        }
        counter = forward ? counter + 1 : counter - 1;
    }
    
    return result.join('');
    
};