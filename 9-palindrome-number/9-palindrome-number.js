/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let xStr = JSON.stringify(x);
    let xArr = xStr.split('').reverse().join('');
    if (xStr === xArr) {
        return true;
    }
    return false;
};