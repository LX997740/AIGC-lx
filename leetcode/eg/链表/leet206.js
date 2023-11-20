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
var reverseList = function (head) {
    if (!head || !head.next) {
        return head
    }
    let pre = null, tmp = null, cur = head
    while(cur){
        tmp = cur.next
        cur.next = pre
        pre = cur
        cur = tmp
    }
}