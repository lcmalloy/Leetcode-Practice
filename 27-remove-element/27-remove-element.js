/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    nums.sort((a,b) => a - b);
    let deleted = 0;
    let right = nums.length - 1,
        left = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            nums[i] = '-';
            deleted += 1;
        }   
    }
    while (left < right) {
        if (nums[left] === '-') {
            let current = nums.splice(left, 1);
            nums.push(current);
            right -= 1;
        } else {
            left += 1;
        }
    }
    return nums.length - deleted;
};


let test = [0,1,2,2,3,0,4,2];
removeElement(test, 2);