/**
 * @func strStr 实现 strStr() 函数。
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 * @author lx
 */
const haystack = "hello", needle = "ll"
//暴力
// var strStr = function (haystack, needle) {
//     if (needle.length === 0) {
//         return -1
//     }
//     let left = 0, right = needle.length - 1


//     while (left < haystack.length && right < haystack.length) {
//         let s = ''
//         for (let i = left; i <= right; i++) {
//             s = s + haystack[i]
//         }
//         console.log(s);
//         if (s === needle) {
//             return left
//         }
//         left++
//         right++
//     }
//     return -1
// };
var strStr = function (haystack, needle) {

}
console.log(strStr(haystack, needle));