/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @func 二叉树的层序遍历
 * @param {TreeNode} root
 * @return {number[][]}
 * @author lx
 */
const root = [3, 9, 20, null, null, 15, 7]
var levelOrder = function (root) {
    let res = []
    let queue = []
    queue.push(root)
    if (!root) {
        return res
    }
    while (queue.length) {
        let len = queue.length
        let arr = []
        for (let i = 0; i < len; i++) {
            let node = queue.shift()
            if (node.left) {
                queue.push(node.left)
            }
            if (node.right) {
                queue.push(node.right)
            }
            arr.push(node.val)
        }
        res.push(arr)
    }
    return res
};