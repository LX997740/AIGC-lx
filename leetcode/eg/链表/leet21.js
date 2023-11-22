
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
/**
 * @func 合并两个有序链表
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 * @author lx
 */
const list1 = [1, 2, 4], list2 = [1, 3, 4]
var mergeTwoLists = function (list1, list2) {
    //迭代
    const l3head = new ListNode(-1)
    let l3 = l3head
    while (list1 !== null && list2 != null) {
        if (list1.val >= list2.val) {
            l3.next = list2
            list2 = list2.next
        } else {
            l3.next = list1
            list1 = list1.next
        }
        l3 = l3.next
    }
    l3.next = list1 === null ? list2 : list1
    return l3head.next

};
console.log(mergeTwoLists(list1,list2));