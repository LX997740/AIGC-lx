/**
 * Definition for singly-linked list.
 **/
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const head = [1, 2, 3, 4]
var swapPairs = function (head) {
    let dummy = new ListNode(-1, head)
    let tmp = dummy
    while (tmp.next !== null && tmp.next.next !== null) {
        const node1 = tmp.next
        const node2 = tmp.next.next
        
        node1.next = node2.next
        tmp.next = node2
        node2.next = node1
        tmp = node1
    }
    return dummy.head
};