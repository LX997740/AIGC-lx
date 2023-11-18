/**
 * @func 比较含退格的字符串
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * @author lx
 */
let s = "xywrrmp", t = "xywrrm#p"
var backspaceCompare = function (s, t) {
    let stack1 = [], stack2 = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '#') {
            stack1.pop()
        } else stack1.push(s[i])
    }
    for (let j = 0; j < t.length; j++) {
        if (t[j] === '#') {
            stack2.pop()
        } else stack2.push(t[j])
        
    }
    while(stack1.length !== 0 && stack2.length !== 0){
        if(stack1.pop()!==stack2.pop()){
            return false
        }
    }
    return stack1.length==stack2.length?true:false
};
console.log(backspaceCompare(s, t));