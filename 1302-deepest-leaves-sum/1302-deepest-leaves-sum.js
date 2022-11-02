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
var deepestLeavesSum = function(root) {
    
    let stack = [root],
        allLevels = [],
        leafSum = 0;
    
    while (stack.length > 0) {
        let len = stack.length;
        let currLevel = [];
        for (let i = 0; i < len; i++) {
            let curr = stack.shift();
                if (curr.left) {
                stack.push(curr.left);
            }
                if (curr.right) {
                stack.push(curr.right);
            }
        currLevel.push(curr.val);
        }
    allLevels.push(currLevel);   
    }
    
    let last = allLevels[allLevels.length-1];
    for (let i = 0; i < last.length; i++) {
        leafSum += last[i];
    }
    return leafSum;

};