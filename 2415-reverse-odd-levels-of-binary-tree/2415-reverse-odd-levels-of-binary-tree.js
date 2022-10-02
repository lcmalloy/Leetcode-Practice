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
    traverse(root.left, root.right, 1);
    return root;
};

function traverse(leftNode, rightNode, level) {
    if (leftNode === null) {
        return;
    }
    if (rightNode === null) {
        return;
    }
    
    if (level % 2 === 1) {
        let temp = leftNode.val;
        leftNode.val = rightNode.val;
        rightNode.val = temp;
    }
    
    traverse(leftNode.left, rightNode.right, level + 1);
    traverse(rightNode.left, leftNode.right, level + 1);
}