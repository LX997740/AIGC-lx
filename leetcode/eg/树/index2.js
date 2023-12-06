let tree = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 4,
            left: null,
            right: null
        },
        right: {
            val: 5,
            left: null,
            right: null
        }
    },
    right: {
        val: 3,
        left: {
            val: 6,
            left: null,
            right: null
        },
        right: {
            val: 7,
            left: null,
            right: null
        }
    }
}
//先序遍历
// function preOrder(root) {
//     if(root === null){
//         return
//     }
//     console.log(root.val);
//     preOrder(root.left);
//     preOrder(root.right);
// }

//中序遍历
// function preOrder(root) {
//     if (root === null) {
//         return
//     }
//     preOrder(root.left);
//     console.log(root.val);
//     preOrder(root.right);
// }

//后序遍历
function preOrder(root) {
    if (root === null) {
        return
    }
    preOrder(root.left);
    preOrder(root.right);
    console.log(root.val);
}
preOrder(tree)