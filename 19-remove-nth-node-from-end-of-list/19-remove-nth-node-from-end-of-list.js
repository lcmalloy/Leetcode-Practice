/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if (head === null) {
        return head;
    }
    let count = 0,
        traverseHead = head;
    while (traverseHead) {
        count += 1;
        traverseHead = traverseHead.next;
    }
    if (n > count) {
        return null;
    }
    if (n === count) {
        return head.next;
    }
    
    let beforePosition = head;
    let nextPosition = beforePosition.next;
    
    let beforeDeleteLocation = count - n - 1;
    while (beforeDeleteLocation > 0) {
        beforePosition = beforePosition.next;
        nextPosition = beforePosition.next;
        beforeDeleteLocation -= 1;
    }
    beforePosition.next = nextPosition.next;
    return head;
};