/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function(root) {
    let max = 0;
    if (!root) {
        return max;
    }
    let queue = [root];
    while (queue.length > 0) {
        let len = queue.length;
        for (let i = 0; i < len; i++) {
            let curr = queue.shift();
            if (curr !== null) {
                if (curr.children) {
                queue = [...queue, ...curr.children];
                }   
            }
        }
        max += 1;
    }
    return max;
};