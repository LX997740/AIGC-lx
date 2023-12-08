/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (!root) return []
    let res = []
    let queue = [root]

    while (queue.length) {
        let len = queue.length
        let arr = []
        for (let i = 0; i < len; i++) {
            let node = queue.shift()
            for(let child of node.children){
                queue.push(child)

            }
            arr.push(node.val)
        }
        res.push(arr)
    }
    return res
};