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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    let memo = {};
    if (!root.left && !root.right) {
        return [`${root.val}`]
    }
    const dfs = (node, path) => {
        if (!node.left && !node.right) {
            let finalCurr = [...path, node.val];
            let newfinalCurr = finalCurr.join('->');
            console.log(newfinalCurr);
            return memo[newfinalCurr] = 1;
        }
        let curr = [...path, node.val];
        if (node.left) {
            dfs(node.left, curr);
        }
        if (node.right) {
            dfs(node.right, curr);
        }
    };
    if (root.left) {
        dfs(root.left, [root.val]);   
    }
    if (root.right) {
        dfs(root.right, [root.val])
    }
    let result = [];
    
    for (let key in memo) {
        result.push(key);
    }
    return result;
};

