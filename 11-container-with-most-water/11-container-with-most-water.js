/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let totalMax = 0,
        left = 0,
        right = height.length - 1;
    while (left <= right) {
        let width = right - left;
        let currentMax = height[height[left] < height[right] ? left++ : right--];
        totalMax = Math.max(totalMax, currentMax * width);
    }
    return totalMax;
};