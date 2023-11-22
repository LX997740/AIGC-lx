
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @func 删除链表中的重复元素2
 * @param {ListNode} head
 * @return {ListNode}
 * @author lx
 */
const head = [1,1,1,2,3]
var deleteDuplicates = function (head) {
    const prevhead = new ListNode(-1111,head)
    let prev = prevhead

    if (!head) {
        return head;
    }

    while(prev.next && prev.next.next){
        
        if(prev.next.val === prev.next.next.val){
            const x = prev.next.val
            while(prev.next && prev.next.val ===x){
                //删除
                prev.next = prev.next.next;
            }
        }else{
            prev = prev.next
        }
    }
    return prevhead.next
};  