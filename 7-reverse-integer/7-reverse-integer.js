/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if (x === 0) {
        return 0;
    }
    let numStr = x.toString();
    let reversedNum = numStr.split('').reverse();
    let i = 0;
    while (reversedNum[i] === '0') {
        reversedNum.shift();
    }
    if (reversedNum[reversedNum.length - 1] === '-') {
        let temp = reversedNum.pop();
        reversedNum.unshift(temp);
    }
    let resultStr = reversedNum.join('');
    let resultNum = Number.parseInt(resultStr);
    
    if (resultNum < Math.pow(-2, 31) || resultNum > (Math.pow(2, 31) - 1)) {
        return 0;
    }
    return resultNum;
};

/*test = -321000;
reverse(test);

*/