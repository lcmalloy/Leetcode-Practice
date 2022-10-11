/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let result = 0,
        left = 0,
        leftMax = 0,
        rightMax = 0,
        right = height.length - 1;
    while (left < right) {
        leftMax = Math.max(leftMax, height[left]);
        rightMax = Math.max(rightMax, height[right]);
        if (leftMax <= rightMax) {
            result += leftMax - height[left];
            left += 1;
        } else {
            result += rightMax - height[right];
            right -= 1;
        }  
    }
    return result;
};






