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
    let sortedList = [];
    
    for (let i = 0; i < lists.length; i++) {
        while(lists[i]) {
            sortedList.push(lists[i].val);
            lists[i] = lists[i].next;
        }
    }
    sortedList.sort((a, b) => a - b);
    let point = new ListNode(0);
    let head = point;
    
    for (let j = 0; j < sortedList.length; j++) {
        point.next = new ListNode(sortedList[j]);
        point = point.next;
    }
    return head.next;
};