/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let memo = {};
        const memoize = (index) => {
            if (index in memo) {
                return memo[index];
            } else if (index >= nums.length) {
                return 0;
            } else {
                let rob = nums[index] + memoize(index + 2),
                dontRob = memoize(index+1);
                let sum = Math.max(rob, dontRob);
                memo[index] = sum;
            }
            return memo[index];
        }
    return memoize(i = 0)        
};

test = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

rob(test);