/**
 * @param {number[]} nums
 * @return {boolean}
 */

//1, 2, 3, 1 -> 1, 1, 2, 3
var containsDuplicate = function(nums) {
    nums.sort((a, b) => a - b);
    
    for (let i = 1; i < nums.length; i++) { 
        if (nums[i] === nums[i - 1]) {
            return true;
        }
    }
    return false; 
};