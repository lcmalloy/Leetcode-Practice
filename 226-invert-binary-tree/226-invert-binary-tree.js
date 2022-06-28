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
var invertTree = function(root) {
    const reverseTree = (node) => {
        if (node === null) {
        return; 
        }
        reverseTree(node.left);
        reverseTree(node.right);
        
        let hold = node.left;
        node.left = node.right;
        node.right = hold; 
    }
    reverseTree(root);
    return root; 
    
};