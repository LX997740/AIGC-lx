
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @func 删除链表中的重复元素
 * @param {ListNode} head
 * @return {ListNode}
 * @author lx
 */
const head = [1,1,2]
var deleteDuplicates = function (head) {
    const prevhead = new ListNode(-1111,head)
    let prev = prevhead

    if (!head) {
        return head;
    }

    while(prev.next){
        if(prev.val === prev.next.val){
            prev.next = prev.next.next
        }else{
            prev = prev.next
        }
    }
    return prevhead.next
};