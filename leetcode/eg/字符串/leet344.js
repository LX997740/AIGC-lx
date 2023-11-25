/**
 * @func 反转字符串
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 * @author lx
 */
const s = ["h","e","l","l","o"]
var reverseString = function(s) {
    let len = s.length,left = 0,right = len - 1
    while(left < right){
        [s[left],s[right]] = [s[right],s[left]]
        left++
        right--
    }
    return s
};
console.log(reverseString(s));