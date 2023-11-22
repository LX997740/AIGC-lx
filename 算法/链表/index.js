let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];  //有序的列表线性结构

// let res = {
//     val :1,
//     next:{
//         val:2,//数据域
//         next:...//指针域
//     }
// }

function ListNode(val) {
    this.val = val ? val : 0;
    this.next = next ?next : null;
}

const node = new ListNode(1);
node.next = new ListNode(2);