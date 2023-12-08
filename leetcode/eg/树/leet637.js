/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @func 二叉树的层平均值
 * @param {TreeNode} root
 * @return {number[]}
 * @author lx
 */
var averageOfLevels = function(root) {
    if (!root) return []
    let res = []
    let queue = [root]
    while(queue.length){
        let len = queue.length
        let sum = 0
        for(let i = 0;i<len ; i++){
            let node = queue.shift()
            if(node.left){
                queue.push(node.left)
            }
            if(node.right){
                queue.push(node.right)
            }
            sum += node.val
        }
        res.push(sum/len)
    }
    return res
};