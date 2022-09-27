/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    let dictionary = {};
    let result = [];
    let row1 = "qwertyuiop",
        row2 = "asdfghjkl",
        row3 = "zxcvbnm";
    
    row1 = row1.split('');
    row2 = row2.split('');
    row3 = row3.split('');
    
    row1.forEach((elem) => {
        dictionary[elem] = 1;
    });
    
    row2.forEach((elem) => {
        dictionary[elem] = 2;
    });
    
    row3.forEach((elem) => {
        dictionary[elem] = 3;
    });
    
    for (let i = 0; i < words.length; i++) {
        let temp = words[i].toLowerCase().split('');
        let row = 0;
        for (let j = 0; j < temp.length; j++) {
            if (j === 0) {
                row = dictionary[temp[j]];
            }
            if (j > 0 && row !== dictionary[temp[j]]) break;
            if (j === temp.length - 1 && row === dictionary[temp[j]]) {
                result.push(words[i])
            }
        }
    }
    return result;
    
};