/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let unique = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i + 1]) {
            nums[i] = '-';
        } else {
            unique += 1;
        }
    }
    let left = 0,
        right = nums.length - 1;
    
    while (left < right) {
        if (nums[left] === '-') {
            let current = nums.splice(left, 1);
            nums.push(current);
            right -= 1;
        } else {
            left += 1;
        }
    }
   return unique;
};