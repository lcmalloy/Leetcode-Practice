/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
    let currSum = 0,
        visited = new Set(),
        prefix = 0;
        
        
    for (let i = 0; i < nums.length; i++) {
        currSum = currSum + nums[i];
        currSum %= k;
        if (visited.has(currSum)) return true;
        visited.add(prefix);
        prefix = currSum;
    }
    return false;
};

