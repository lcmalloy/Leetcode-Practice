/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    let sortedValues = [];
    
    for (let i = 0; i < lists.length; i++) {
        while(lists[i]) {
            sortedValues.push(lists[i].val);
            lists[i] = lists[i].next;
        }
    }
    sortedValues.sort((a, b) => a - b);
    let point = new ListNode(0);
    let head = point;
    
    for (let i = 0; i < sortedValues.length; i++) {
        point.next = new ListNode(sortedValues[i]);
        point = point.next;
    }
    return head.next; 
};