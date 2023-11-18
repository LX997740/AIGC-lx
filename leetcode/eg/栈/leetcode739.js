/**
 * @func 等待多少天后温度会更高
 * @param {number[]} temperatures
 * @return {number[]}
 * @author lx
 */
let temperatures = [73,74,75,71,69,72,76,73]

//暴力解法

// var dailyTemperatures = function(temperatures) {
//     let len = temperatures.length
//     let array = []
    

//     for(let i = 0;i<len;i++){
//         let flag = false
//         for(let j = i+1;j<len;j++){
//             if(temperatures[j]>temperatures[i]){
//                 array.push(j-i)
//                 flag = true
//                 break
//             }
//         }
//         if(!flag){
//             array.push(0)
//         }
//     }
//     return array
// };

//栈

var dailyTemperatures = function(temperatures) {
    let len = temperatures.length
    let stack = []
    let res = new Array(len).fill(0)
    for(let i = 0; i<len;i++){
        //存在打破递减趋势的温度
        while(stack.length&&temperatures[i]>temperatures[stack[stack.length-1]]){
            let top = stack.pop()
            res[top] = i-top
        }
        stack.push(i)
    }
    return res
};

console.log(dailyTemperatures(temperatures));