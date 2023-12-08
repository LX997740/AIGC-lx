/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
    if (!root) return []
    let res = []
    let queue = [root]
    let flag = true
    while (queue.length) {
        let tmp = []
        let len = queue.length
        for (let i = 0; i < len; i++) {
            let node = queue.shift()
            if (node.left) {
                queue.push(node.left)
            }
            if (node.right) {
                queue.push(node.right)
            }
            if (flag) {
                tmp.push(node.val)
            } else {
                tmp.unshift(node.val)
            }
        }
        flag =!flag
        res.push(tmp)
    }
    return res
};