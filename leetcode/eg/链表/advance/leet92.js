/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @func reverseBetween
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 * @author lx
 */
const head = [1, 2, 3, 4, 5], left = 2, right = 4
var reverseBetween = function (head, left, right) {
    if (left === right) {
        return head
    }
    const dummy = new ListNode(-999,head)
    let lNode = dummy, rNode = dummy

    for (let i = 0; i < left - 1; i++) {
        lNode = lNode.next
    }
    for (let j = 0; j < right; j++) {
        rNode = rNode.next
    }

    let r = rNode.next
    rNode.next = null
    let l = lNode.next

    const res = reverseList(lNode.next)
    lNode.next = res
    l.next = r

    return dummy.next
};

var reverseList = function (head) {
    if (!head || !head.next) {
        return head
    }
    let pre = null, tmp = null, cur = head
    while (cur) {
        tmp = cur.next
        cur.next = pre
        pre = cur
        cur = tmp
    }
    return pre
}