let haystack = "sadbutsad", needle = "sad"
var strStr = function(haystack, needle) {
    let a = haystack.length
    let b = needle.length
    
    for(let i = 0;i+b<=a;i++){
        let flag = true
        for(let j = 0;j<b;j++){
            if(haystack[i+j] !== needle[j]){
                flag = false
                break;
            }
        }
        if(flag){
            return i
        }
            
    }
    return -1
};
console.log(strStr(haystack,needle));