/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let result = 0;
    const splitString = s.split('')
    let containSingleChar = false;
    let resultObject = {};
    for (let i = 0; i < splitString.length; i++) {
        if (!resultObject[splitString[i]]) {
          resultObject[splitString[i]] = 1;  
        } else {
            resultObject[splitString[i]] += 1;
        }
        if (resultObject[splitString[i]] === 2) {
            result += 2;
            resultObject[splitString[i]] = 0;
        }
    }
    for (var key in resultObject) {
        if (resultObject[key] === 1) {
            containSingleChar = true;
        }
    }
    if (containSingleChar) {
        result += 1;
    }
    return result;
};