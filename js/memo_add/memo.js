//记忆函数
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