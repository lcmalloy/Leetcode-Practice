/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    nums.sort((a, b) => a - b);
    let total = nums.reduce((a, b) => a + b);
    if (total % 2 !== 0) {
        return false;
    }
    
    total /= 2;
    
    while (nums.length > 0) {
        let curr = nums.pop();
        let remainder = total - curr;
        let isPossible = dp([...nums], remainder);
        if (isPossible) {
            return true;
        }
    }
    return false;
};


const dp = (arr, remainder, memo = {}) => {
    if (remainder === 0) {
        return true;
    }
    if (remainder < 0) {
        return false;
    }
    
    while (arr.length > 0) {
        let nextCurr = arr.pop();
        remainder -= nextCurr;
        if (!memo[remainder]) {
            memo[remainder] = 1;
        let isPossible = dp([...arr], remainder, memo);   
        if (isPossible) {
            return true;
            }
        }
        remainder += nextCurr;
    }
    return false;
}


let test = [2,2,3,5];

canPartition(test);


 