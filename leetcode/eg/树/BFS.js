//层序遍历
function BFS(root) {
    if (!root) {
        return [];
    }

    let result = [];
    let queue = [];
    queue.push(root);

    while (queue.length) {
        let node = queue.shift();
        let arr = []; 
        for (let i = 0; i < queue.length; i++) {
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
            arr.push(node.val);
        }
        result.push(arr);
    }

    return result;
}