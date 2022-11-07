/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    let numStr = JSON.stringify(num);
    let numArr = numStr.split('');
    for (let i = 0; i < numArr.length; i++) {
        if (numArr[i] === '6') {
            numArr[i] = '9';
            break;
        }
    }
    let newNum = JSON.parse(numArr.join(''));
    return newNum;

};