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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    if (root.val === val) {
        return root;
    }
    if (!root.left && !root.right) {
        return null;
    }
    
    if (root.left) {
      let left = searchBST(root.left, val);
        if (left !== null) {
            return left;
        }
    }
    if (root.right) {
        let right = searchBST(root.right, val);
        if (right !== null) {
            return right;
        }
    }
    return null;
};