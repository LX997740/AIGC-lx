// let str = '2023年10月30日'
// console.log(str.split('年')[1].split('月')[1].split('日'));

//字符串的反转
// let str = 'juejin'
// let res = str.split('').reverse().join('')
// console.log(res);

let str = 'yesey'
// function ispalindrome(str){
//     let res = str.split('').reverse().join('')
//     if(str === res){
//         return str === res
//     }
// }

// function ispalindrome(str){
//     let stack = []
//     for(let i = 0;i<str.length;i++){
//         stack.push(s[i])
//     }
//     for(let j = 0;j<str.length;j++){
//         if(s[j] !== stack.pop()){
//             return false
//         }
//     }
//     return true
// }

function ispalindrome(str){
    let len = str.length
    let j = len-1
    for(let i = 0;i<len/2;i++){
        if(str[i] !==str[j-i]){
            return false
        }
    }
    return true
}