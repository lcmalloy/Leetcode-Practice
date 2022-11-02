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
 * @return {number[]}
 */

var averageOfLevels = function(root) {
    let result = [];
    let stack = [root];
    
    while (stack.length > 0) {
        let len = stack.length;
        let sum = 0;
        for (let i = 0; i < len; i++) {
            let curr = stack.shift();
            sum += curr.val;
            if (curr.left) {
                stack.push(curr.left);
            }
            if (curr.right) {
                stack.push(curr.right);
            }
        }
        result.push(sum / len);
    }
    return result;
};