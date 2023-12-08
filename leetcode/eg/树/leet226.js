/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @func 翻转二叉树
 * @param {TreeNode} root
 * @return {TreeNode}
 * @author lx
 */
var invertTree = function (root) {
    if (!root) return null

    let queue = [root]
    while (queue.length) {
        
        let len = queue.length
        for (let i = 0; i < len; i++) {
            let node = queue.shift()
            if (node.left) {
                queue.push(node.left)
            }
            if (node.right) {
                queue.push(node.right)
            }
            console.log(node.left,node.right);
            [node.left, node.right] = [node.right, node.left]
            console.log(node.left,node.right);
        }
    }
    return root;
};