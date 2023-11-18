/**
 * Definition for singly-linked list.

 */
/**
 * @func 移除链表元素
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 * @author lx
 */
const head = [1, 2, 6, 3, 4, 5, 6], val = 6
// function ListNode(val, next) {
//     this.val = (val === undefined ? 0 : val)
//     this.next = (next === undefined ? null : next)
// }

class ListNode {
    val = -1
    next = null
    constructor(val, next) {
        this.val = val
        this.next = next
    }
}

var removeElements = function (head, val) {
    const ret = new ListNode(0, head)
    let cur = ret
    while (cur.next !== null) {
        let res = cur.next
        if (res.val === val) {
            res = res.next
            continue
        }
        cur = cur.next
    }
    return cur.next
};
console.log(removeElements(head, val));