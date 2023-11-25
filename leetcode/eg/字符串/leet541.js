/**
 * @func 反转字符串II
 * @param {string} s
 * @param {number} k
 * @return {string}
 * @author lx
 */
const s = "abcdefg", k = 2
var reverseStr = function (s, k) {
    let len = s.length;
    let arr = s.split('');
    console.log(arr);

    for (let i = 0; i < len; i =i+ (2 * k)) {  // 每隔 2k 个字符的前 k 个字符进行反转
        let l = i
        let r = i + k-1 > len ? len : i + k-1;
        while (l < r) {
            [arr[l], arr[r]] = [arr[r], arr[l]]
            // console.log(l,r,arr[l], arr[r])
            l++ 
            r--
        }
    }
    return arr.join('');
};
console.log(reverseStr(s, k));