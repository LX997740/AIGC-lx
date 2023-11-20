/**
 * Definition for singly-linked list.
 **/
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const head = [1, 2, 3, 4, 5], n = 2
var removeNthFromEnd = function (head, n) {
    if (!head) {
        return head
    }
    const dummy = new ListNode(-1,head)
    let fast = dummy, slow = dummy
    let j = n-1
    while (n) {
        fast = fast.next
        n--
    }
    while(!fast){
        
    }

};