/**
 * @func 最长平衡字串
 * @param {string} s
 * @return {number}
 * @author lx
 */

const s = "00001011"
var findTheLongestBalancedSubstring = function (s) {
    const len = s.length - 1
    let a = 0, b = 0
    let maxLen = 0

    for (let i = 0; i <= len; i++) {

        if (s[i] === '0') {
            if (i != 0 && s[i - 1] === '1') {
                maxLen = Math.max(maxLen, Math.min(a, b) * 2)
                a = 0
                b = 0
            } 
            a++
        } else if (s[i] === '1') {
            b++
            if (i == len) {
                maxLen = Math.max(maxLen, Math.min(a, b) * 2)
            }
        }
    }
    return maxLen
};

console.log(findTheLongestBalancedSubstring(s));