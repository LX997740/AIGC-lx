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
 * @return {boolean}
 */
var isBalanced = function (root) {
    if (!root) {
        return true
    }

    let res = getHeight(root)
    console.log(res)
    if (res === -1) {
        return false
    } else {
        return true
    }
};

var getHeight = function (root) {
    if (!root) {
        return 0
    }

    let LeftHeight = getHeight(root.left)

    if (LeftHeight === -1) {
        return -1
    }
    let RightHeight = getHeight(root.right)
    if (RightHeight === -1) {
        return -1
    }

    let result = 0;
    if (Math.abs(LeftHeight - RightHeight) > 1) {
        result = -1;
    } else {
        result = 1 + Math.max(LeftHeight, RightHeight);
    }
    return result
}   