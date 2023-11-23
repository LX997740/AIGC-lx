/**
 * @func 赎金信
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 * @author lx
 */
const ransomNote = "a", magazine = "b"
var canConstruct = function(ransomNote, magazine) {
    let map = new Map();
    // 统计字符串中每个字符出现的次数
    for (let i = 0; i < magazine.length; i++) {
        if (map.has(magazine[i])) {
            map.set(magazine[i], map.get(magazine[i]) + 1);
        }else{
            map.set(magazine[i], 1);
        }
    }
    for (let j = 0; j < ransomNote.length; j++) {
        if(map.has(ransomNote[j])){
            map.set(ransomNote[j], map.get(ransomNote[j]) - 1);
        }else{
            return false;
        }
        if(map.get(ransomNote[j]) < 0){
            return false;
        }
    }
    return true;
};
console.log(canConstruct(ransomNote, magazine));