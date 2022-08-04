/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let filteredWord = s.replace(/[^0-9a-z]/gi, '').toLowerCase();
    let reverse = s.replace(/[^0-9a-z]/gi, '').toLowerCase().split('').reverse().join('');
    
    console.log(reverse);
    if (filteredWord === reverse) {
        return true;
    }
    return false; 
};