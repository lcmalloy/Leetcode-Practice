/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxSum = nums[0];
    let curSum = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (curSum < 0) {
            curSum = 0;
        }
        curSum += nums[i];
        maxSum = Math.max(maxSum, curSum);
    }
    return maxSum;
};