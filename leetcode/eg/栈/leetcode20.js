/**
 * @func 有效括号
 * @param {string} s
 * @return {boolean}
 * @author lx
 */
let s = "()[]{}"
let obj = {
    '(':')',
    '[':']',
    '{':'}'
}
var isValid = function(s) {
    let stack = []
    let len = s.length
    
    for(let i=0;i<len;i++){
        let item = s[i]
        if(item ==='{'||item === '('||item === '[' ){
            stack.push(item)
        }else {
            //判断此时的item是否适配栈顶的元素
            if( !stack.length||item !== obj[stack.pop()] ){
                return false
            }
        }
    }
    return !stack.length
};
console.log(isValid(s));