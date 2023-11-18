/**
 * @func 验证回文串II
 * @param {string} s
 * @return {boolean}
 * @author lx
 */

let s = "abca"
var validPalindrome = function(s) {
    let len = s.length
    let left = 0,right = len-1
    while(left<right && s[left] === s[right]){
        left++
        right--
    }
    //尝试跳过i或者j
    if(ispalindrome(left+1,right)){
        return true
    }
    if(ispalindrome(left,right-1)){
        return true
    }

    function ispalindrome(st,ed){
        while(st<ed){
            if(s[st]!==s[ed]){
                return false
            }
            st++
            ed-- 
        }
        return true
    }
    return false
};

