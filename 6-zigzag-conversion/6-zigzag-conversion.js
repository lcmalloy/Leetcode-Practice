/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1) {
        return s;
    }
    let result = [];
    
    for (let i = 0; i < numRows; i++) {
        result.push('');
    }
    //result ['', '', '']
    
    let forward = true;
    let position = 1;
    
    for (let i = 0; i < s.length; i++) {
        result[position - 1] += s[i];
        if (position === numRows) {
            forward = false;
        } else if (position === 1) {
            forward = true;
        }
        position = forward ? position + 1 : position - 1;
    }
    return result.join('');
};