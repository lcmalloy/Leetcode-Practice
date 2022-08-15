/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let result = [];
    
    for (let i = 0; i < nums.length; i++) {
        let left = i - 1;
        let right = i + 1;
        let sum = 1;
        
        while (left >= 0) {
            sum = sum * nums[left]
            left -= 1;
        }
        while (right < nums.length) {
            sum = sum * nums[right];
            right += 1;
        }
        result.push(sum);
    }
    return result;
};