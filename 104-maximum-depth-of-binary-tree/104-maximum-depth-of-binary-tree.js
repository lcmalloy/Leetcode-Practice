/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root, count = 0) {
    if (!root) {
        return count;
    }
    count += 1;
    
    if (!root.left && !root.right) {
        return count;
    } else if (!root.left) {
        return maxDepth(root.right, count);
    } else if (!root.right) {
        return maxDepth(root.left, count);
    } else {
        let left = maxDepth(root.left, count),
        right = maxDepth(root.right, count);
        return Math.max(left, right)
    }
};