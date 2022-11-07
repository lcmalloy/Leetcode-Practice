/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max = 0, left = 0, right = height.length - 1;
    while (left < right) {
        let minHeight = Math.min(height[left], height[right]);
        let area = minHeight * (right - left);
        max = Math.max(max, area);
        if (height[left] <= height[right]) {
            left += 1;
        } else {
            right -= 1;
        }
    }
    return max;
};