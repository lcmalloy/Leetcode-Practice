/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let index = -1,
        left = 0,
        right = nums.length - 1;
    while (left <= right) {
        let mid = Math.floor(((left + right) / 2));
        if (nums[mid] === target){
            index = mid;
            break;
        } else if (nums[left] <= nums[mid]) {
           if (nums[left] <= target && target < nums[mid]) {
            right = mid - 1;
            } else {
                left = mid + 1;
            }  
        } else {
            if (nums[mid] <= target && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        } 
    }
    
    return index;
};



/*

    know where mid is
    left at 0
    right at array.length - 1;
    
    check if mid === target
        if not 
        





*/