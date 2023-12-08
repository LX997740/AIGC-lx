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
 * @return {number}
 */
var minDepth = function(root) {
    if(root === null) return 0;
    let minDeep = Infinity
    let queue = [root];
    
    while(queue.length){
        let len = queue.length;
        let treeDeep = 0;

        for(let i = 0;i<len;i++){
            let node = queue.shift();
            if(node.left){
                queue.push(node.left);
            }
            if(node.right){
                queue.push(node.right);
            }
            if(i === len-1){
                treeDeep++;
            }
        }
        console.log(treeDeep);
        minDeep = Math.min(minDeep, treeDeep);
    }
    return minDeep;
};