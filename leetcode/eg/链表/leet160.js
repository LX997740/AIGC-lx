/**
 * Definition for singly-linked list.
 *  */
function ListNode(val) {
    this.val = val;
    this.next = null;
}


/**
 * @func 相交链表
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 * @author lx
 */
var getLen = function (list) {
    let len = 0
    cur = list;
    while (cur) {
        cur = cur.next;
        len++;
    }
    return len
}
var getIntersectionNode = function (headA, headB) {
    let lenA = getLen(headA), lenB = getLen(headB);
    let len = Math.max(lenA, lenB) - Math.min(lenA, lenB);
    let cura = headA, curb = headB;

    if (lenA >= lenB) {
        while (len) {
            cura = cura.next;
            len--;
        }

        while (cura) {
            if (cura !== curb) {
                cura = cura.next
                curb = curb.next
            } else {
                return cura
            }
        }
    } else if (lenA < lenB) {
        while (len) {
            curb = curb.next;
            len--;
        }
        
        while (cura) {
            if (cura !== curb) {
                cura = cura.next
                curb = curb.next
            } else {
                return curb
            }
        }
    }
    return null
};