/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @func 二叉树的右视图
 * @param {TreeNode} root
 * @return {number[]}
 * @author lx
 */
var rightSideView = function (root) {
    if (!root) {
        return [];
    }

    let res = []
    let queue = [root]

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
            if (i === len - 1) {
                arr.push(node.val)
            }
        }
        res.push(arr)
    }
    return res
};