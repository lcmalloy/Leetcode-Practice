/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
    if (n === 2 || n === 3) {
        return n-1;
    }
    let val = n;
    let resultArr = [];
    
    let result = 1
    while (val !== 0) {
        if (val === 1) {
            let curr = resultArr.pop();
            curr += 1;
            resultArr.push(curr);
            break;
        }
        if (val === 2) {
            resultArr.push(2);
            break;
        }
        resultArr.push(3);
        val = val - 3;
    }
    
    resultArr.forEach((val) => {
        result *= val;
    })
    return result;
};