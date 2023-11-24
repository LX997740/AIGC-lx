//永远不要相信用户的输入
function add(a, b) {

    // ...代表参数?
    if (arguments.length !== 2) {
        //抛出错误
        throw new Error('参数个数不对');
    }
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('参数类型不对,请传入整数');
    }

    return a + b;
}
function memoize(fn) {
    if (typeof fn !== 'function') {
        throw new Error('参数不是函数')
    }
    //缓存
    const cache = {

    }//key:value O(1)时间复杂度修改  空间换时间
    return function () {
        //唯一性
        let key = arguments.length + Array.prototype.join.call(arguments, ',');
        // console.log(key);
        if (key in cache) {
            return cache[key]
        } else {
            return cache[key] = fn.apply(this,arguments);
        }
    }
}
//记忆功能
const memoizeAdd = memoize(add)
console.log(memoizeAdd(1, 2));
console.log(memoizeAdd(2, 1));
//js不严格 编译阶段
// try {
//     add('s', 's')
// } catch (err) {
//     console.log(err);
// }

// try {
//     console.log(add(1, 2));
//     console.log(add(1, 2));
// } catch (err) {
//     console.log(err);
// }