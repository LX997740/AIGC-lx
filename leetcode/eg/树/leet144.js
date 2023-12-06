/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @func {144} 二叉树的前序遍历
 * @param {TreeNode} root
 * @return {number[]}
 * @author lx
 */
const root = [1,null,2,3]

//递归
// var preorderTraversal = function(root) {

//     let res = [];
//     function preorder(node) {
//         if (!node) {
//             return;
//         }
//         res.push(node.val);
//         preorder(node.left);
//         preorder(node.right);
//     }
//     preorder(root)
//     return res;
// };
console.log(preorderTraversal(root));