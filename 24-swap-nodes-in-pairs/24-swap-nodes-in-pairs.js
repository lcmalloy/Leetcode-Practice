/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if (!head || !head.next) {
        return head;
    }
    let swapList = new ListNode();
    let pointer = swapList;
    
    while (head !== null) {
        let oddNode = head;
        let evenNode = oddNode?.next ? oddNode.next : null;
        head = evenNode?.next ? evenNode.next : null;
        if (evenNode) {
            pointer.next = evenNode;
            pointer = pointer.next;   
        }
        if (oddNode) {
            pointer.next = oddNode;
            pointer = pointer.next;   
        }
    }
    pointer.next = null;
    return swapList.next;
};



/*[1,2,3,4]
head
3 -> 4

oddNode = 3,4
EvenNode = 4

swapList
0 -> 2 -> 1 -> 4 -> 3 -> 4

pointer: 5

at the end pointer.next = null;

*/