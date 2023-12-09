/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @func 验证二叉树
 * @param {TreeNode} root
 * @return {boolean}
 * @author lx
 */
var isValidBST = function(root) {
    let arr = preOrder(root, []);
    console.log(arr);
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[i - 1]) {
            return false;
        }
    }
    return true;
};
var preOrder = function(root, arr) {
    if (!root) {
        return [];
    }
    if (root) {
        
        preOrder(root.left, arr);
        arr.push(root.val);
        preOrder(root.right, arr);
    }
    return arr
};