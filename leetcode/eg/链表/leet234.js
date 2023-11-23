/**
 * Definition for singly-linked list.
 * */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @function 回文链表
 * @param {ListNode} head
 * @return {boolean}
 * @author lx
 */
const head = [1,2,2,1]
var isPalindrome = function (head) {
    if (!head.next) {
        return true
    }
    if(!head){
        return false
    }
    let arr = []
    let cur = head
    while(cur){
        arr.push(cur.val)
        cur = cur.next
    }
    let left = 0 , right = arr.length-1
    while(left<right){
        if(arr[left] !== arr[right]){
            return false
        }
        left++
        right--
    }
    return true
};
console.log(isPalindrome(head));