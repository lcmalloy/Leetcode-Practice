/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let carry = 0;
    let newNode = new ListNode(0);
    let pointer = newNode;
    
    while(l1 || l2 || carry) {
        let node1Val = l1 ? l1.val : 0;
        let node2Val = l2 ? l2.val : 0;
        let sum = node1Val + node2Val + carry;
        carry = Math.floor(sum / 10);
        sum %= 10;
        pointer.next = new ListNode(sum);
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
        pointer = pointer.next;
    }
    return newNode.next;
};