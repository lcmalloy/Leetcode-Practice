/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let result = [];
    nums.sort((a, b) => a - b);
    
    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        let left = i + 1,
            right = nums.length - 1;
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            if (sum < 0) {
                left += 1;
            } else if (sum > 0) {
                right -= 1;
            } else {
                result.push([nums[i], nums[left], nums[right]]);
                left += 1;
                while (nums[left] === nums[left - 1] && left < right) {
                    left += 1;
                }
            }
        }
    }
    return result; 
};