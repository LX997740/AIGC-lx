const memoized = require('./memo.js')
var count = 0
var fibonacci = function (n) {
    count++
    return n<2 ? n : fibonacci(n-1) + fibonacci(n-2)
}

const fibonacciMemo = memoized(fibonacci)
console.time('fibonacci')
fibonacciMemo(30)
console.log(count)
console.timeEnd('fibonacci')