/**
 * @func 无重复的最长子串长度
 * @param {string} s
 * @return {number}
 * @author lx
 */
const s = "abcabcbb"
//暴力解法


// var lengthOfLongestSubstring = function(s) {
//     const len = s.length
//     if (len===0) return 0
    
//     let res = 1
    
//     for (let i = 0; i < len; i++) {
//         let current = 1
//         let j = i+1
//         let str = s[i]
//         while(!str.includes(s[j])&&j<len){
//             current++
//             str = str+s[j]
//             j++
//         }
//         res = Math.max(res,current)
        
//     }
//     return res
// };

var lengthOfLongestSubstring = function(s){
    let obj = {}
    let res = 0
    let j = 0
    for(let i = 0;i<s.length;i++){
        let value = obj[s[i]]
        if(value!==undefined){
            //j表示上一次出现的下标+1
            j = Math.max(value+1,j)
        }
        res = Math.max(res,i-j+1)
        obj[s[i]] = i
    }
    return res
}
console.log(lengthOfLongestSubstring(s));