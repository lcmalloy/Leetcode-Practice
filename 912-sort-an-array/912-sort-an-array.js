/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    if (nums.length < 2) {
        return nums;
    }
    let middle = Math.floor(nums.length / 2),
        left = nums.slice(0, middle),
        right = nums.slice(middle);
    
    function merge(left,  right) {
        let result = [], lLen = left.length, rLen = right.length, lIndex = 0, rIndex = 0;
        while (lIndex < lLen && rIndex < rLen) {
            if (left[lIndex] < right[rIndex]) {
                result.push(left[lIndex++]);
            } else {
                result.push(right[rIndex++]);
            }
        }
        return result.concat(left.slice(lIndex)).concat(right.slice(rIndex));
    }
    return merge(sortArray(left), sortArray(right));
};