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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let result = [],
        queue = [root];
    if (!root) {
        return result;
    }
    while (queue.length > 0) {
        let level = [],
            currLen = queue.length;
        for (let i = 0; i < currLen; i++) {
            let currNode = queue.shift();
            level.push(currNode.val);
            if (currNode.left) {
                queue.push(currNode.left);
            }
            if (currNode.right) {
                queue.push(currNode.right);
            }
        }
        result.push(level);
    }
    return result;
};



//create an array that will store the values at different levels
//create a queue and add root to the queue
//while the queue contains nodes
    //create a array to store current level node values
    //create var to store current len of queue
        //for loop thru 0 -> currLen
            //shift value from queue
            //add value to currLevel
            //if currNode has a left add to queue
            //do same for right
        //add currLevel array to result array
//return result array;