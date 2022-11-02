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
var sumEvenGrandparent = function(root) {
    let sum = 0
    const traverse = (node) => {
        if (!node) {
            return null;
        }
        if (node.val % 2 === 0) {
            if (node.left) {
                if (node.left.left) {
                    sum += node.left.left.val;   
                }
                if (node.left.right) {
                    sum += node.left.right.val;   
                }
                traverse(node.left);
            }
            if (node.right) {
                if (node.right.left) {
                    sum += node.right.left.val;   
                }
                if (node.right.right) {
                    sum += node.right?.right?.val;
                }
                traverse(node.right);
            }
        } else {
            traverse(node.left);
            traverse(node.right);
        }
    }
    traverse(root);
    return sum;
};