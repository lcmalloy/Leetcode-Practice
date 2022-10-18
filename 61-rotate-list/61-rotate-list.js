/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (!head) {
        return head;
    }
    let length = 0;
    let lenPointer = head;
    let tail = null;
    while (lenPointer !== null) {
        length += 1;
        if (lenPointer.next === null) {
            tail = lenPointer;
        }
        lenPointer = lenPointer.next;
    }
    if (length === 1 || k % length === 0) {
        return head;
    }
    let findNode = length - (k % length)
    let updatePointer = head,
        curr = 0;
    
    while (curr !== findNode - 1) {
        curr += 1;
        updatePointer = updatePointer.next;
    }
    let temp = updatePointer.next;
    updatePointer.next = null;
    tail.next = head;
    return temp;
};