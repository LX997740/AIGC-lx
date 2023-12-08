/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @func 对称二叉树
 * @param {TreeNode} root
 * @return {boolean}
 * @author lx
 */
var isSymmetric = function (root) {
    if (!root || (root.left === null && root.right === null)) {
        return true
    }
    let queue = []
    queue.push(root)

    while (queue.length) {
        let len = queue.length
        let arr = []
        for (let i = 0; i < len; i++) {
            let node = queue.shift()
            if (node.left) {
                queue.push(node.left)
                arr.push(node.left.val)
            }else{
                arr.push(null)
            }
            if (node.right) {
                queue.push(node.right)
                arr.push(node.right.val)
            }else{
                arr.push(null)
            }
        }
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] !== arr[arr.length - 1 - i]) {
                return false
            }
        }

    }
    return true
};