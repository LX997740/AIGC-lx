/**
 * @func 拼写单词
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 * @author lx
 */
const words = ["cat", "bt", "hat", "tree"], chars = "atach"
var countCharacters = function (words, chars) {
    let len = 0
    let map = new Map()
    for (let i = 0; i < chars.length; i++) {
        if (map.has(chars[i])) {
            map.set(chars[i], map.get(chars[i]) + 1)
        } else {
            map.set(chars[i], 1)
        }
    }
    for (let j = 0; j < words.length; j++) {
        let map2 = new Map()
        for (let k = 0; k < words[j].length; k++) {
            if (map2.has(words[j][k])) {
                map2.set(words[j][k], map2.get(words[j][k]) + 1)
            } else {
                map2.set(words[j][k], 1)
            }
        }
        if (check(map, map2)) {
            len += words[j].length
        }
    }
    return len
};
var check = function ( map, map2) {
    for (let [key, value] of map2) {
        if (map.has(key)) {
            if (map.get(key) < value) {
                return false
            }
        } else {
            return false
        }
    }
    return true
}
console.log(countCharacters(words, chars))