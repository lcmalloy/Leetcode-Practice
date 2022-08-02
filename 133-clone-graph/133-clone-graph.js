/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    let graphMap = {};
    
    function traverseNode(currentNode) {
        if (!currentNode) {
            return;
        }
        if (graphMap[currentNode.val]) {
            return graphMap[currentNode.val];
        }
        let copyNode = new Node(currentNode.val);
        graphMap[currentNode.val] = copyNode;
        
        currentNode.neighbors.forEach(neighbor => copyNode.neighbors.push(traverseNode(neighbor)))
        return copyNode;
    }
   return traverseNode(node);
};