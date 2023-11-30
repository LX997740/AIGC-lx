/**
 * @func 统计一致字符串的数目
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 * @author lx
 */
const allowed = "ab", words = ["ad","bd","aaab","baa","badab"]

var countConsistentStrings = function(allowed, words) {
    let res = 0
    let set = new Set(allowed)
    for(let i = 0; i < words.length; i++) {
        for(let j = 0; j < words[i].length; j++) {
            if(!set.has(words[i][j])) {
                res++
            }
        }
    }
    return words.length-res
};
console.log(countConsistentStrings(allowed, words))