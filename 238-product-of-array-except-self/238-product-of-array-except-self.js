/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  let result = [];
    
    for (let i = 0; i < nums.length; i++) {
        let total = 1,
            left = i - 1,
            right = i + 1;
        while (left > -1) {
            total = total * nums[left];
            left -= 1;
        }
        while (right < nums.length) {
            total = total * nums[right];
            right += 1;
        }
        result.push(total);
    }
    return result;
};