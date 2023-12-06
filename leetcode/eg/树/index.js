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
function TreeNode(val, left, right) {
    this.val = val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

const node = new TreeNode(1)
const node2 = new TreeNode(2)
const node3 = new TreeNode(3)
node.left = node2
node.right = node3
const node4 = new TreeNode(4)
const node5 = new TreeNode(5)
node2.left = node4
node2.right = node5
console.log(node);
