/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @func 二叉树后序遍历
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
    if (!root) {
        return []
    }
    let res = []
    let stack = []
    stack.push(root)

    while (stack.length) {
        const top = stack.pop()
        res.unshift(top.val)
        if(top.left){
            stack.push(top.left)
        }
        if(top.right){
            stack.push(top.right)
        }
    }
    return res
};
