/**
 * @func 389. 找不同
 * @param {string} s
 * @param {string} t
 * @return {character}
 * @author lx
 */
const s = "abcd", t = "abcdd"
var findTheDifference = function(s, t) {
    if(s === ''){
        return t;
    }
    let map = new Map();
    for(let i = 0; i < s.length; i++){
        if(map.has(s[i])){
            map.set(s[i], map.get(s[i]) + 1);
        }else{
            map.set(s[i], 1);
        }
    }
    for(let j = 0; j < t.length; j++){
        if(map.has(t[j])){
            map.set(t[j], map.get(t[j]) - 1);
            if(map.get(t[j]) === -1){
                return t[j];
            }
        }else{
            return t[j];
        }
    }

}; 
console.log(findTheDifference(s, t));