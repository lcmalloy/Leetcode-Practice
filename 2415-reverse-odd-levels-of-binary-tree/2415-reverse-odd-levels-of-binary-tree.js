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
 * @return {TreeNode}
 */
var reverseOddLevels = function(root) {
    if (root === null) {
        return root;
    }
    
    function swapOdds(left, right, level) {
        if (left === null) {
            return;
        }
        if (right === null) {
            return;
        }
        if (level % 2 === 1) {
            let temp = left.val;
            left.val = right.val;
            right.val = temp;
        }
        swapOdds(left.left, right.right, level + 1);
        swapOdds(left.right, right.left, level + 1);
    }
    swapOdds(root.left, root.right, 1);
    return root;
};