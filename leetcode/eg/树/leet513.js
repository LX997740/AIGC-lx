/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @func findBottomLeftValue
 * @param {TreeNode} root
 * @return {number}
 * @desc 层序遍历，从左往右遍历，每一层的最后一个节点就是最左边的节点的值
 * @author lx
 */
var findBottomLeftValue = function (root) {
    if (!root) return null
    let queue = [root]
    let res = 0

    while (queue.length) {
        let len = queue.length
        for (let i = 0; i < len; i++) {
            let node = queue.shift()
            if (i == 0) {
                res = node.val
            }
            if (node.left) {
                queue.push(node.left)
            }
            if (node.right) {
                queue.push(node.right)
            }
        }
    }
    return res
};