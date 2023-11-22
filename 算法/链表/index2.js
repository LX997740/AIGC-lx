//增删元素
o(n)//数组
o(1)//链表

//读取值
o(1)//数组
o(n)//链表

function ListNode(val) {
    this.val = val ? val : 0;
    this.next = next ?next : null;
}

const index = 10 
let node = new ListNode()
for (let i = 0; i < index; i++) {
    node = node.next
};