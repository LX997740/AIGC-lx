/**
 * @func 快乐数
 * @param {number} n
 * @return {boolean}
 * @author lx
 */
const n = 1
let sum
//求数的每一位平方和
var Sum = function (n) {
    let sum = 0
    while (n !== 0) {
        sum += (n % 10) * (n % 10)
        n = Math.floor(n / 10)
    }
    return sum
}

var isHappy = function (n) {
    let set = new Set()

    while (n) {
        n = Sum(n)
        if (set.has(n)) {
            return false
        } else {
            set.add(n)
        }

        if (n === 1) {
            return true
        }
    }
};
console.log(isHappy(n));