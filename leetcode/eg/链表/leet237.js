/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @function 删除链表中的节点
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 * @author lx
 */
const head = [4, 5, 1, 9], node = 5
var deleteNode = function (node) {
    if (node.next) {
        node.val = node.next.val;
        node.next = node.next.next;
        this.size--;
    }
};
console.log(deleteNode(node));