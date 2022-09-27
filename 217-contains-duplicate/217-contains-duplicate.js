/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let reoccurence = {};
    let result = false;
    nums.forEach((val) => {
        if (!reoccurence[val]) {
            reoccurence[val] = 0;
        }
        reoccurence[val] += 1;
    });
    
    let eachOccur = Object.values(reoccurence);
    eachOccur.forEach((num) => {
        if (num !== 1) {
            result = true;
        }
    });
    return result;
};