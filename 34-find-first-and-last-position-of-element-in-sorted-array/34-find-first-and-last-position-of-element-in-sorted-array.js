/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let startIndex = findMin(-1, nums, target);
    let endIndex = findMax(-1, nums, target);
    return [startIndex, endIndex];
};

const findMin = function(index, nums, target) {
    let left = 0,
        right = nums.length - 1;
    
    while (left <= right) {
        let mid = Math.floor((right + left) / 2);
        if (nums[mid] === target) {
            if (nums[mid-1] === target) {
                right = mid - 1;
            } else {
                return index = mid;
            }
        } else if (target < nums[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return index;
}

const findMax = function(index, nums, target) {
    let left = 0,
        right = nums.length - 1;
    
    while (left <= right) {
        let mid = Math.floor((right + left) / 2);
        if (nums[mid] === target) {
            if (nums[mid+1] === target) {
                left = mid + 1;
            } else {
                return index = mid;
            }
        } else if (target < nums[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return index;
}
