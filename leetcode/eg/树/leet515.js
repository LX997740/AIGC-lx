/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @func 在每个树行中寻找最大值
 * @param {TreeNode} root
 * @return {number[]}
 * @author lx
 */
var largestValues = function(root) {
    if(!root) return []
    let res = []
    let queue = [root]

    while(queue.length){
        let len = queue.length
        let max = -Infinity
        for(let i = 0 ;i<len ;i++ ){
            let node = queue.shift()
            if(node.left){
                queue.push(node.left)
            }
            if(node.right){
                queue.push(node.right)
            }
            if(node.val > max){
                max = node.val
            }
        }
        res.push(max)
    }
    return res
};