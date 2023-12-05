/**
 * @func 58. 最后一个单词的长度
 * @param {string} s
 * @return {number}
 * @author lx
 */
const s="   fly me   to   the moon  "
var lengthOfLastWord = function(s) {
    let arr = s.split(' ')
    // console.log(arr);
    console.log(arr.length);
    for (let i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i],i);
        if (arr[i] !=='') {
            return arr[i].length
        }
    }
};
console.log(lengthOfLastWord(s));